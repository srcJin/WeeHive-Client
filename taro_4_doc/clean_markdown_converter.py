#!/usr/bin/env python3
"""
Taro Documentation HTML to Clean Markdown Converter
Converts HTML files to clean, properly formatted markdown with focus on code blocks
"""

import os
import re
import sys
import html
import argparse
from pathlib import Path
from html.parser import HTMLParser
from typing import List, Dict, Optional


class TaroMarkdownConverter(HTMLParser):
    """Custom HTML parser to convert Taro docs to clean markdown"""

    def __init__(self):
        super().__init__()
        self.reset_state()

    def reset_state(self):
        """Reset parser state for new document"""
        self.output = []
        self.in_code_block = False
        self.in_inline_code = False
        self.in_heading = False
        self.in_paragraph = False
        self.in_list_item = False
        self.in_table = False
        self.in_blockquote = False
        self.current_heading_level = 0
        self.code_block_lang = ""
        self.skip_content = False
        self.list_depth = 0
        self.table_rows = []
        self.current_row = []
        self.link_url = ""
        self.link_text = ""
        self.in_link = False

        # CSS classes to skip
        self.skip_classes = {
            "buttonGroup",
            "copyButton",
            "tocCollapsible",
            "theme-doc-toc",
            "theme-doc-version-badge",
            "docMainContainer",
            "pagination",
            "breadcrumb",
            "sidebar",
            "navigation",
            "menu",
            "header",
            "footer",
            "navbar",
            "edit-this-page",
            "lastUpdated",
            "tableOfContents",
        }

        # Tags to completely skip
        self.skip_tags = {"script", "style", "nav", "header", "footer", "button"}

    def should_skip_element(self, tag: str, attrs: List[tuple]) -> bool:
        """Determine if an element should be skipped"""
        if tag in self.skip_tags:
            return True

        # Check for skip classes
        for name, value in attrs:
            if name == "class" and value:
                if any(skip_class in value for skip_class in self.skip_classes):
                    return True

        return False

    def handle_starttag(self, tag: str, attrs: List[tuple]):
        """Handle opening HTML tags"""
        if self.should_skip_element(tag, attrs):
            self.skip_content = True
            return

        # Handle headings
        if tag in ["h1", "h2", "h3", "h4", "h5", "h6"]:
            self.in_heading = True
            self.current_heading_level = int(tag[1])
            self.ensure_blank_line()
            self.output.append("#" * self.current_heading_level + " ")

        # Handle paragraphs
        elif tag == "p":
            if not self.in_code_block:
                self.ensure_blank_line()
                self.in_paragraph = True

        # Handle code blocks
        elif tag == "pre":
            self.ensure_blank_line()
            self.in_code_block = True
            # Look for language in class attribute
            for name, value in attrs:
                if name == "class" and value:
                    # Extract language from class like "language-javascript"
                    lang_match = re.search(r"language-(\w+)", value)
                    if lang_match:
                        self.code_block_lang = lang_match.group(1)
            self.output.append(f"```{self.code_block_lang}\n")

        # Handle inline code
        elif tag == "code" and not self.in_code_block:
            self.in_inline_code = True
            self.output.append("`")

        # Handle blockquotes
        elif tag == "blockquote":
            self.ensure_blank_line()
            self.in_blockquote = True
            # Don't add > prefix here, we'll handle it in data

        # Handle lists
        elif tag in ["ul", "ol"]:
            if self.list_depth == 0:
                self.ensure_blank_line()
            self.list_depth += 1

        elif tag == "li":
            self.in_list_item = True
            indent = "  " * (self.list_depth - 1)
            self.output.append(f"\n{indent}- ")

        # Handle links
        elif tag == "a":
            self.in_link = True
            for name, value in attrs:
                if name == "href":
                    self.link_url = value
                    break
            self.output.append("[")

        # Handle images
        elif tag == "img":
            alt_text = ""
            src = ""
            for name, value in attrs:
                if name == "alt":
                    alt_text = value
                elif name == "src":
                    src = value
            if src and not src.startswith("data:"):
                self.output.append(f"![{alt_text}]({src})")

        # Handle line breaks
        elif tag == "br":
            self.output.append("\n")

        # Handle horizontal rules
        elif tag == "hr":
            self.ensure_blank_line()
            self.output.append("---\n")

        # Handle emphasis
        elif tag in ["em", "i"]:
            self.output.append("*")
        elif tag in ["strong", "b"]:
            self.output.append("**")

    def handle_endtag(self, tag: str):
        """Handle closing HTML tags"""
        if tag in self.skip_tags:
            self.skip_content = False
            return

        if tag in ["h1", "h2", "h3", "h4", "h5", "h6"]:
            self.in_heading = False
            self.output.append("\n")

        elif tag == "p":
            if self.in_paragraph:
                self.output.append("\n")
                self.in_paragraph = False

        elif tag == "pre":
            if self.in_code_block:
                self.output.append("```\n")
                self.in_code_block = False
                self.code_block_lang = ""

        elif tag == "code" and not self.in_code_block:
            if self.in_inline_code:
                self.output.append("`")
                self.in_inline_code = False

        elif tag == "blockquote":
            self.in_blockquote = False

        elif tag in ["ul", "ol"]:
            self.list_depth -= 1
            if self.list_depth == 0:
                self.output.append("\n")

        elif tag == "li":
            self.in_list_item = False

        elif tag == "a":
            if self.in_link:
                self.output.append(f"]({self.link_url})")
                self.in_link = False
                self.link_url = ""

        elif tag in ["em", "i"]:
            self.output.append("*")
        elif tag in ["strong", "b"]:
            self.output.append("**")

    def handle_data(self, data: str):
        """Handle text content"""
        if self.skip_content:
            return

        # Clean up whitespace
        if self.in_code_block:
            # Preserve formatting in code blocks
            self.output.append(data)
        elif self.in_blockquote:
            # Handle blockquote content
            cleaned = re.sub(r"\s+", " ", data).strip()
            if cleaned:
                lines = cleaned.split("\n")
                for line in lines:
                    if line.strip():
                        self.output.append("> " + line.strip() + "\n")
        else:
            # Clean up whitespace in regular text
            cleaned = re.sub(r"\s+", " ", data)
            if cleaned.strip():
                self.output.append(cleaned)

    def ensure_blank_line(self):
        """Ensure there's a blank line before the next content"""
        if self.output and self.output[-1] != "\n":
            self.output.append("\n")

    def get_markdown(self) -> str:
        """Get the final markdown content"""
        content = "".join(self.output)

        # Clean up the output
        content = self.post_process(content)

        return content

    def post_process(self, content: str) -> str:
        """Clean up the generated markdown"""
        # Remove excessive blank lines
        content = re.sub(r"\n{3,}", "\n\n", content)

        # Fix heading formatting
        content = re.sub(r"^(#{1,6})\s*(.+)$", r"\1 \2", content, flags=re.MULTILINE)

        # Fix list formatting
        content = re.sub(r"^\s*-\s+$", "", content, flags=re.MULTILINE)

        # Fix code block formatting
        content = re.sub(r"```\s*\n\s*```", "", content)

        # Remove HTML entities
        content = html.unescape(content)

        # Clean up extra spaces
        content = re.sub(r" +", " ", content)

        # Remove empty links
        content = re.sub(r"\[\]\([^)]*\)", "", content)

        # Remove lines that are just ">"
        content = re.sub(r"^>\s*$", "", content, flags=re.MULTILINE)

        # Fix blockquote formatting issues
        content = re.sub(r"^#\s*>\s*", "> ", content, flags=re.MULTILINE)

        # Ensure single trailing newline
        content = content.strip() + "\n"

        return content


def extract_main_content(html_content: str) -> str:
    """Extract main content from HTML by removing navigation, headers, etc."""
    # Remove script and style tags
    html_content = re.sub(
        r"<script[^>]*>.*?</script>", "", html_content, flags=re.DOTALL | re.IGNORECASE
    )
    html_content = re.sub(
        r"<style[^>]*>.*?</style>", "", html_content, flags=re.DOTALL | re.IGNORECASE
    )

    # Try to find main content area
    main_patterns = [
        r"<main[^>]*>(.*?)</main>",
        r"<article[^>]*>(.*?)</article>",
        r'<div[^>]*class="[^"]*markdown[^"]*"[^>]*>(.*?)</div>',
        r'<div[^>]*class="[^"]*content[^"]*"[^>]*>(.*?)</div>',
    ]

    for pattern in main_patterns:
        match = re.search(pattern, html_content, flags=re.DOTALL | re.IGNORECASE)
        if match:
            return match.group(1)

    # If no main content found, return the whole body
    body_match = re.search(
        r"<body[^>]*>(.*?)</body>", html_content, flags=re.DOTALL | re.IGNORECASE
    )
    if body_match:
        return body_match.group(1)

    return html_content


def convert_html_to_markdown(html_file: Path, output_file: Path) -> bool:
    """Convert a single HTML file to markdown"""
    try:
        # Read HTML file
        with open(html_file, "r", encoding="utf-8", errors="ignore") as f:
            html_content = f.read()

        # Extract main content
        main_content = extract_main_content(html_content)

        # Convert to markdown
        converter = TaroMarkdownConverter()
        converter.feed(main_content)
        markdown_content = converter.get_markdown()

        # Ensure output directory exists
        output_file.parent.mkdir(parents=True, exist_ok=True)

        # Write markdown file
        with open(output_file, "w", encoding="utf-8") as f:
            f.write(markdown_content)

        return True

    except Exception as e:
        print(f"Error converting {html_file}: {e}")
        return False


def main():
    parser = argparse.ArgumentParser(
        description="Convert Taro HTML docs to clean markdown"
    )
    parser.add_argument(
        "source", help="Source HTML file or directory containing HTML files"
    )
    parser.add_argument(
        "output", help="Output markdown file or directory for markdown files"
    )
    parser.add_argument("--verbose", "-v", action="store_true", help="Verbose output")

    args = parser.parse_args()

    source_path = Path(args.source)
    output_path = Path(args.output)

    if not source_path.exists():
        print(f"Error: Source {source_path} does not exist")
        return 1

    # Handle single file conversion
    if source_path.is_file():
        if source_path.suffix.lower() != ".html":
            print(f"Error: {source_path} is not an HTML file")
            return 1

        print(f"Converting single file: {source_path}")

        if convert_html_to_markdown(source_path, output_path):
            print(f"✓ Converted to: {output_path}")
            return 0
        else:
            print(f"✗ Failed to convert {source_path}")
            return 1

    # Handle directory conversion
    source_dir = source_path
    output_dir = output_path

    # Find all HTML files
    html_files = list(source_dir.rglob("*.html"))

    if not html_files:
        print(f"No HTML files found in {source_dir}")
        return 1

    print(f"Found {len(html_files)} HTML files to convert")

    converted = 0
    failed = 0

    for html_file in html_files:
        # Calculate relative path
        rel_path = html_file.relative_to(source_dir)
        md_file = output_dir / rel_path.with_suffix(".md")

        if args.verbose:
            print(f"Converting: {rel_path}")

        if convert_html_to_markdown(html_file, md_file):
            converted += 1
            if args.verbose:
                print(f"✓ Converted: {rel_path}")
        else:
            failed += 1
            if args.verbose:
                print(f"✗ Failed: {rel_path}")

    print(f"\nConversion completed:")
    print(f"  Converted: {converted}")
    print(f"  Failed: {failed}")
    print(f"  Output directory: {output_dir}")

    # Create index file
    create_index(output_dir, converted)

    return 0 if failed == 0 else 1


def create_index(output_dir: Path, file_count: int):
    """Create an index file for the converted documentation"""
    index_content = f"""# Taro 4.x Documentation

This directory contains {file_count} Taro documentation files converted to clean markdown format.

## Source
- Original: https://docs.taro.zone/docs/
- Converted: {__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
- Converter: Clean HTML to Markdown converter

## Features
- ✅ Clean markdown formatting
- ✅ Preserved code blocks with syntax highlighting
- ✅ Proper heading structure
- ✅ Clean lists and links
- ✅ Removed navigation and UI elements

## Structure

The documentation is organized as follows:

"""

    # Find all markdown files and group by directory
    md_files = list(output_dir.rglob("*.md"))
    md_files = [f for f in md_files if f.name != "README.md"]
    md_files.sort()

    current_dir = None
    for md_file in md_files:
        rel_path = md_file.relative_to(output_dir)
        dir_name = str(rel_path.parent) if rel_path.parent != Path(".") else "Root"

        if dir_name != current_dir:
            current_dir = dir_name
            index_content += f"\n### {dir_name}\n\n"

        title = md_file.stem.replace("-", " ").replace("_", " ").title()
        index_content += f"- [{title}]({rel_path})\n"

    # Write index file
    with open(output_dir / "README.md", "w", encoding="utf-8") as f:
        f.write(index_content)


if __name__ == "__main__":
    sys.exit(main())

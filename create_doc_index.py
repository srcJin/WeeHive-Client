#!/usr/bin/env python3
"""
Create a searchable index for Taro documentation
This creates a JSON index that can be used for quick searching and reference
"""

import json
import re
from pathlib import Path
from typing import Dict, List, Set
import argparse

def extract_content_info(md_file: Path) -> Dict:
    """Extract useful information from a markdown file"""
    try:
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract title (first heading)
        title_match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
        title = title_match.group(1).strip() if title_match else md_file.stem
        
        # Extract all headings for navigation
        headings = re.findall(r'^(#{1,6})\s+(.+)$', content, re.MULTILINE)
        
        # Extract code blocks and their languages
        code_blocks = re.findall(r'```(\w+)?\n(.*?)```', content, re.DOTALL)
        
        # Extract API function names (common patterns)
        api_functions = set()
        # Taro.xxx() patterns
        taro_apis = re.findall(r'Taro\.(\w+)', content)
        api_functions.update(taro_apis)
        
        # Function definitions
        func_defs = re.findall(r'function\s+(\w+)', content)
        api_functions.update(func_defs)
        
        # Extract key terms for searching
        key_terms = set()
        
        # Component names (capitalized words)
        components = re.findall(r'\b[A-Z][a-zA-Z]+\b', content)
        key_terms.update(components)
        
        # Config keys and props
        config_keys = re.findall(r'`(\w+)`', content)
        key_terms.update(config_keys)
        
        # Calculate relative path from docs root
        rel_path = str(md_file).replace('/Volumes/Mac_Working/GitHub/WeeHive-Client/taro_4_doc/clean_markdown/', '')
        
        # Determine category based on path
        category = "general"
        if "apis/" in rel_path:
            category = "api"
        elif "components/" in rel_path:
            category = "component"
        elif "config" in rel_path.lower():
            category = "config"
        elif "guide" in rel_path.lower() or "tutorial" in rel_path.lower():
            category = "guide"
        
        return {
            "title": title,
            "path": rel_path,
            "category": category,
            "headings": [{"level": len(h[0]), "text": h[1]} for h in headings],
            "api_functions": list(api_functions),
            "key_terms": list(key_terms)[:50],  # Limit to avoid bloat
            "code_languages": list(set([cb[0] for cb in code_blocks if cb[0]])),
            "content_length": len(content),
            "has_examples": "示例" in content or "example" in content.lower(),
            "has_api_ref": bool(taro_apis)
        }
        
    except Exception as e:
        print(f"Error processing {md_file}: {e}")
        return None

def create_search_index(docs_dir: Path) -> Dict:
    """Create a comprehensive search index"""
    print("Creating documentation index...")
    
    md_files = list(docs_dir.rglob("*.md"))
    md_files = [f for f in md_files if f.name not in ["README.md", "index.md"]]
    
    index = {
        "metadata": {
            "created": __import__('datetime').datetime.now().isoformat(),
            "total_files": len(md_files),
            "version": "1.0"
        },
        "documents": [],
        "categories": {},
        "api_index": {},
        "component_index": {},
        "search_terms": {}
    }
    
    category_counts = {}
    api_functions = {}
    components = set()
    
    for md_file in md_files:
        print(f"Processing: {md_file.name}")
        doc_info = extract_content_info(md_file)
        
        if doc_info:
            index["documents"].append(doc_info)
            
            # Group by category
            category = doc_info["category"]
            category_counts[category] = category_counts.get(category, 0) + 1
            
            # Index API functions
            for api_func in doc_info["api_functions"]:
                if api_func not in api_functions:
                    api_functions[api_func] = []
                api_functions[api_func].append(doc_info["path"])
            
            # Index components
            if category == "component":
                components.add(doc_info["title"])
    
    # Build category index
    index["categories"] = category_counts
    index["api_index"] = api_functions
    index["component_index"] = list(components)
    
    # Create search terms index
    search_terms = {}
    for doc in index["documents"]:
        for term in doc["key_terms"]:
            if term not in search_terms:
                search_terms[term] = []
            search_terms[term].append(doc["path"])
    
    index["search_terms"] = search_terms
    
    return index

def main():
    parser = argparse.ArgumentParser(description="Create searchable index for Taro docs")
    parser.add_argument("--docs-dir", default="taro_4_doc/clean_markdown", 
                       help="Directory containing markdown docs")
    parser.add_argument("--output", default="taro_docs_index.json",
                       help="Output JSON file")
    
    args = parser.parse_args()
    
    docs_dir = Path(args.docs_dir)
    if not docs_dir.exists():
        print(f"Error: Documentation directory {docs_dir} not found")
        return 1
    
    # Create index
    index = create_search_index(docs_dir)
    
    # Save to JSON
    output_file = Path(args.output)
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(index, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Index created: {output_file}")
    print(f"📄 Documents: {index['metadata']['total_files']}")
    print(f"🏷️  Categories: {len(index['categories'])}")
    print(f"🔧 API Functions: {len(index['api_index'])}")
    print(f"🧩 Components: {len(index['component_index'])}")
    
    return 0

if __name__ == "__main__":
    import sys
    sys.exit(main())

#!/bin/bash

# Taro Documentation Downloader
# Downloads the entire Taro 4.x documentation site as HTML files

set -e

# Configuration
BASE_URL="https://docs.taro.zone"
DOCS_URL="${BASE_URL}/docs/"
TARGET_DIR="./taro_4_doc"
LOG_FILE="${TARGET_DIR}/download.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Create target directory
echo -e "${BLUE}Creating target directory: ${TARGET_DIR}${NC}"
mkdir -p "${TARGET_DIR}"

# Function to log messages
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "${LOG_FILE}"
}

# Function to download with retry
download_with_retry() {
    local url="$1"
    local output="$2"
    local max_attempts=3
    local attempt=1
    
    while [ $attempt -le $max_attempts ]; do
        if wget --quiet --timeout=30 --tries=3 "$url" -O "$output"; then
            return 0
        fi
        echo -e "${YELLOW}Attempt $attempt failed for $url, retrying...${NC}"
        attempt=$((attempt + 1))
        sleep 2
    done
    
    echo -e "${RED}Failed to download $url after $max_attempts attempts${NC}"
    return 1
}

log "Starting Taro documentation download..."

# Method 1: Use wget with recursive download (more comprehensive)
echo -e "${BLUE}Using wget recursive download for comprehensive coverage...${NC}"

cd "${TARGET_DIR}"

# Download the entire docs section recursively
# --recursive: download recursively
# --level=5: download up to 5 levels deep
# --no-clobber: don't overwrite existing files
# --page-requisites: get all files needed to display pages
# --html-extension: save files with .html extension
# --convert-links: convert links for local browsing
# --restrict-file-names=windows: ensure filenames work on all systems
# --domains: only download from docs.taro.zone
# --no-parent: don't ascend to parent directory
# --wait=1: wait 1 second between downloads (be nice to the server)
# --random-wait: vary the wait time
# --user-agent: identify as a browser

wget \
    --recursive \
    --level=5 \
    --no-clobber \
    --page-requisites \
    --html-extension \
    --convert-links \
    --restrict-file-names=windows \
    --domains docs.taro.zone \
    --no-parent \
    --wait=1 \
    --random-wait \
    --user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
    --reject="*.css,*.js,*.png,*.jpg,*.jpeg,*.gif,*.ico,*.svg,*.woff,*.woff2,*.ttf,*.eot" \
    --exclude-directories="/css,/js,/images,/static,/_next" \
    "${DOCS_URL}" 2>&1 | tee -a "${LOG_FILE}"

log "Recursive download completed."

# Create an index of downloaded files
echo -e "${BLUE}Creating index of downloaded files...${NC}"
find . -name "*.html" -type f | sort > downloaded_files.txt
total_files=$(wc -l < downloaded_files.txt)
log "Downloaded $total_files HTML files"

# Create a simple navigation index
echo -e "${BLUE}Creating navigation index...${NC}"
cat > index.md << 'EOF'
# Taro 4.x Documentation - Local Copy

This is a local copy of the Taro documentation downloaded from https://docs.taro.zone/docs/

## Structure

The documentation is organized as follows:

EOF

# Add file listing to index
echo "## Downloaded Files" >> index.md
echo "" >> index.md
while IFS= read -r file; do
    # Clean up the path for display
    clean_path=$(echo "$file" | sed 's|^\./docs\.taro\.zone/docs/||' | sed 's|\.html$||')
    echo "- [$clean_path]($file)" >> index.md
done < downloaded_files.txt

log "Index created: index.md"

echo -e "${GREEN}Download completed successfully!${NC}"
echo -e "${GREEN}Files saved to: ${TARGET_DIR}${NC}"
echo -e "${GREEN}Total files: $total_files${NC}"
echo -e "${GREEN}Log file: ${LOG_FILE}${NC}"
echo -e "${GREEN}Index file: ${TARGET_DIR}/index.md${NC}"

# Display summary
echo -e "\n${BLUE}=== DOWNLOAD SUMMARY ===${NC}"
echo -e "Target directory: ${TARGET_DIR}"
echo -e "Total HTML files: $total_files"
echo -e "Log file: ${LOG_FILE}"
echo -e "Index file: ${TARGET_DIR}/index.md"
echo -e "\n${YELLOW}Next step: Run the markdown conversion script${NC}"

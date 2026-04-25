#!/bin/bash
# Quick script to commit favicon changes

echo "📷 Updating favicon files..."

# Add the favicon files
git add public/favicon.ico public/logo192.png public/logo512.png

# Commit
git commit -m "Add custom 'M' letter favicon for MAKZIBS Photography"

# Push
git push origin main

echo "✅ Favicon updated and pushed to GitHub!"
echo "🔄 Clear your browser cache (Cmd+Shift+R) to see the new favicon"

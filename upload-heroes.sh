#!/bin/bash

# Upload all hero images to Cloudinary with correct names
# This script uploads heroImage1.jpg through heroImage18.jpg

CLOUD_NAME="dtz8zyqhy"
API_KEY="211289662187232"

echo "🚀 Uploading hero images to Cloudinary..."
echo ""

for i in {1..18}; do
  FILE="src/assets/images/category$i/heroImage$i.jpg"
  
  if [ -f "$FILE" ]; then
    echo "📤 Uploading Category $i hero image..."
    
    # Generate timestamp
    TIMESTAMP=$(date +%s)
    
    # Upload to Cloudinary (unsigned upload)
    curl -X POST "https://api.cloudinary.com/v1_1/$CLOUD_NAME/image/upload" \
      -F "file=@$FILE" \
      -F "public_id=heroImage$i" \
      -F "upload_preset=ml_default" \
      2>/dev/null | grep -q "public_id" && echo "   ✅ heroImage$i uploaded successfully" || echo "   ❌ Failed (you may need to set up upload preset)"
    
    sleep 1
  else
    echo "⚠️  File not found: $FILE"
  fi
done

echo ""
echo "✅ Upload complete!"
echo "🔄 Refresh your website to see the changes"

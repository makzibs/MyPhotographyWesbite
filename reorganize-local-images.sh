#!/bin/bash

# Portfolio Reorganization Script
# This reorganizes local image folders to match the new 6-category structure

cd "$(dirname "$0")/src/assets/images"

echo "🎨 Starting portfolio reorganization..."
echo ""

# Create backup
echo "📦 Creating backup..."
mkdir -p ../../../backup-old-categories
cp -r . ../../../backup-old-categories/
echo "✅ Backup created at backup-old-categories/"
echo ""

# Create new category folders
echo "📁 Creating new category structure..."
mkdir -p category1-new category2-new category3-new category4-new category5-new category6-new

# CATEGORY 1: Golden Hour Portraits (Sunflower + Sunset)
echo "☀️  Category 1: Golden Hour Portraits"
cp category2/heroImage2.jpg category1-new/
cp category2/2.*.jpg category1-new/ 2>/dev/null
cp category16/16.*.jpg category1-new/ 2>/dev/null
cp category16/heroImage16.jpg category1-new/ 2>/dev/null

# CATEGORY 2: Studio Portraits (Studio + Dark Ambience)
echo "🎭 Category 2: Studio Portraits"
cp category1/heroImage1.jpg category2-new/
cp category1/1.*.jpg category2-new/ 2>/dev/null
cp category3/3.*.jpg category2-new/ 2>/dev/null

# CATEGORY 3: Family & Lifestyle
echo "👨‍👩‍👧‍👦 Category 3: Family & Lifestyle"
cp category9/heroImage9.jpg category3-new/
cp category9/9.*.jpg category3-new/ 2>/dev/null
cp category10/10.*.jpg category3-new/ 2>/dev/null
cp category14/14.*.jpg category3-new/ 2>/dev/null
cp category6/6.1.jpg category3-new/ 2>/dev/null
cp category6/6.2*.jpg category3-new/ 2>/dev/null

# CATEGORY 4: Wedding Photography
echo "💒 Category 4: Wedding Photography"
cp category12/heroImage12.jpg category4-new/
cp category12/12.*.jpg category4-new/ 2>/dev/null
cp category6/6.3*.jpg category4-new/ 2>/dev/null
cp category6/6.4*.jpg category4-new/ 2>/dev/null
cp category6/6.5*.jpg category4-new/ 2>/dev/null
cp category6/6.6*.jpg category4-new/ 2>/dev/null
cp category6/6.7*.jpg category4-new/ 2>/dev/null

# CATEGORY 5: Event Photography
echo "🎉 Category 5: Event Photography"
cp category17/heroImage17.jpg category5-new/
cp category17/17.*.jpg category5-new/ 2>/dev/null
cp category18/18.*.jpg category5-new/ 2>/dev/null

# CATEGORY 6: Creative Portraits
echo "🎨 Category 6: Creative Portraits"
cp category11/heroImage11.jpg category6-new/
cp category11/11.*.jpg category6-new/ 2>/dev/null
cp category4/4.1.jpg category6-new/ 2>/dev/null
cp category4/4.2.jpg category6-new/ 2>/dev/null
cp category4/4.3.jpg category6-new/ 2>/dev/null
cp category5/5.*.jpg category6-new/ 2>/dev/null
cp category7/7.*.jpg category6-new/ 2>/dev/null
cp category8/8.*.jpg category6-new/ 2>/dev/null
cp category13/13.*.jpg category6-new/ 2>/dev/null
cp category15/15.*.jpg category6-new/ 2>/dev/null
cp category6/6.8*.jpg category6-new/ 2>/dev/null
cp category6/6.9*.jpg category6-new/ 2>/dev/null
cp category6/6.10*.jpg category6-new/ 2>/dev/null

echo ""
echo "🗑️  Removing old category folders..."
rm -rf category1 category2 category3 category4 category5 category6 category7 category8 category9 category10 category11 category12 category13 category14 category15 category16 category17 category18

echo "📝 Renaming new folders..."
mv category1-new category1
mv category2-new category2
mv category3-new category3
mv category4-new category4
mv category5-new category5
mv category6-new category6

echo ""
echo "✅ Reorganization complete!"
echo ""
echo "📊 New structure:"
echo "  Category 1: Golden Hour Portraits ($(ls category1/*.jpg 2>/dev/null | wc -l | tr -d ' ') images)"
echo "  Category 2: Studio Portraits ($(ls category2/*.jpg 2>/dev/null | wc -l | tr -d ' ') images)"
echo "  Category 3: Family & Lifestyle ($(ls category3/*.jpg 2>/dev/null | wc -l | tr -d ' ') images)"
echo "  Category 4: Wedding Photography ($(ls category4/*.jpg 2>/dev/null | wc -l | tr -d ' ') images)"
echo "  Category 5: Event Photography ($(ls category5/*.jpg 2>/dev/null | wc -l | tr -d ' ') images)"
echo "  Category 6: Creative Portraits ($(ls category6/*.jpg 2>/dev/null | wc -l | tr -d ' ') images)"
echo ""
echo "💾 Old categories backed up to: backup-old-categories/"
echo ""
echo "🎉 Done! Your portfolio is now reorganized into 6 focused categories."

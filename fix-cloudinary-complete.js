require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET
});

async function deleteOldImages() {
  console.log('🗑️  Deleting old numbered images from Cloudinary...\n');
  
  const result = await cloudinary.api.resources({
    type: 'upload',
    max_results: 500
  });
  
  const numberedImages = result.resources
    .filter(r => r.public_id.match(/^\d+\.\d+/))
    .map(r => r.public_id);
  
  console.log(`Found ${numberedImages.length} old images to delete`);
  
  for (let i = 0; i < numberedImages.length; i += 10) {
    const batch = numberedImages.slice(i, i + 10);
    try {
      await cloudinary.api.delete_resources(batch);
      console.log(`   ✅ Deleted batch ${Math.floor(i/10) + 1}`);
    } catch (error) {
      console.log(`   ⚠️  Error: ${error.message}`);
    }
  }
  
  console.log('✅ Old images deleted\n');
}

async function uploadImage(filePath, publicId) {
  const stats = fs.statSync(filePath);
  const sizeMB = stats.size / 1024 / 1024;
  
  let uploadPath = filePath;
  if (sizeMB > 10) {
    console.log(`      Compressing (${sizeMB.toFixed(1)}MB)...`);
    const compressedPath = filePath.replace('.jpg', '-temp.jpg');
    execSync(`sips -s format jpeg -s formatOptions 70 "${filePath}" --out "${compressedPath}"`, { stdio: 'pipe' });
    uploadPath = compressedPath;
  }
  
  const result = await cloudinary.uploader.upload(uploadPath, {
    public_id: publicId,
    overwrite: true,
    resource_type: 'image'
  });
  
  if (uploadPath !== filePath && fs.existsSync(uploadPath)) {
    fs.unlinkSync(uploadPath);
  }
  
  return result.public_id;
}

async function uploadCategory(folder, categoryName) {
  console.log(`\n📁 ${categoryName}`);
  const folderPath = path.join(__dirname, 'src/assets/images', folder);
  
  if (!fs.existsSync(folderPath)) {
    console.log(`   ⚠️  Folder not found`);
    return [];
  }
  
  const files = fs.readdirSync(folderPath)
    .filter(f => f.match(/^\d+\.\d+\.jpg$/) && !f.includes('copy'))
    .sort((a, b) => {
      const aNum = parseFloat(a.match(/^(\d+\.\d+)/)[1]);
      const bNum = parseFloat(b.match(/^(\d+\.\d+)/)[1]);
      return aNum - bNum;
    });
  
  console.log(`   Found ${files.length} images`);
  
  const uploaded = [];
  for (const file of files) {
    const publicId = file.replace('.jpg', '');
    console.log(`   📤 ${publicId}...`);
    try {
      const id = await uploadImage(path.join(folderPath, file), publicId);
      uploaded.push(id);
      console.log(`      ✅ Done`);
    } catch (error) {
      console.log(`      ❌ Error: ${error.message}`);
    }
  }
  
  return uploaded;
}

async function main() {
  console.log('🎨 FIXING CLOUDINARY - COMPLETE REORGANIZATION\n');
  console.log('═══════════════════════════════════════════════\n');
  
  try {
    // Step 1: Delete old images
    await deleteOldImages();
    
    // Step 2: Upload new images
    console.log('📤 Uploading images from new folder structure...');
    
    const cat1 = await uploadCategory('category1-golden-hour-portraits', 'Category 1: Golden Hour Portraits');
    const cat2 = await uploadCategory('category2-studio-portraits', 'Category 2: Studio Portraits');
    const cat4 = await uploadCategory('category4-wedding-photography', 'Category 4: Wedding Photography');
    const cat5 = await uploadCategory('category5-event-photography', 'Category 5: Event Photography');
    const cat6 = await uploadCategory('category6-all portraits', 'Category 6: All Portraits');
    const cat7 = await uploadCategory('category7-cities and nature', 'Category 7: Cities and Nature');
    
    console.log('\n\n═══════════════════════════════════════════════');
    console.log('✅ UPLOAD COMPLETE!\n');
    console.log('📊 Summary:');
    console.log(`   Category 1: ${cat1.length} images`);
    console.log(`   Category 2: ${cat2.length} images`);
    console.log(`   Category 4: ${cat4.length} images`);
    console.log(`   Category 5: ${cat5.length} images`);
    console.log(`   Category 6: ${cat6.length} images`);
    console.log(`   Category 7: ${cat7.length} images`);
    
    console.log('\n📝 Code to update in CategoryDetail.js:\n');
    console.log('category1: {');
    console.log(`  heroImage: 'heroImage1',`);
    console.log(`  images: [${cat1.map(id => `'${id}'`).join(', ')}]`);
    console.log('},');
    console.log('category2: {');
    console.log(`  heroImage: 'heroImage2',`);
    console.log(`  images: [${cat2.map(id => `'${id}'`).join(', ')}]`);
    console.log('},');
    console.log('category4: {');
    console.log(`  heroImage: 'heroImage4',`);
    console.log(`  images: [${cat4.map(id => `'${id}'`).join(', ')}]`);
    console.log('},');
    console.log('category5: {');
    console.log(`  heroImage: 'heroImage5',`);
    console.log(`  images: [${cat5.map(id => `'${id}'`).join(', ')}]`);
    console.log('},');
    console.log('category6: {');
    console.log(`  heroImage: 'heroImage6',`);
    console.log(`  images: [${cat6.map(id => `'${id}'`).join(', ')}]`);
    console.log('},');
    console.log('category7: {');
    console.log(`  heroImage: 'heroImage7',`);
    console.log(`  images: [${cat7.map(id => `'${id}'`).join(', ')}]`);
    console.log('},');
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

main();

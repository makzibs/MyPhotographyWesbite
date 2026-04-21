require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY || process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET || process.env.CLOUDINARY_API_SECRET
});

// Images that need to be compressed and uploaded
const imagesToProcess = [
  // Category 4
  { local: 'src/assets/images/category4/4.1.jpg', publicId: '4.1', size: 11649480 },
  { local: 'src/assets/images/category4/4.2.jpg', publicId: '4.2', size: 11598636 },
  { local: 'src/assets/images/category4/4.3.jpg', publicId: '4.3', size: 10962468 },
  { local: 'src/assets/images/category4/4.6.jpg', publicId: '4.6', size: 16645665 },
  
  // Category 6
  { local: 'src/assets/images/category6/6.1.jpg', publicId: '6.1', size: 10660532 },
  
  // Category 16
  { local: 'src/assets/images/category16/16.1.jpg', publicId: '16.1', size: 11956396 },
  { local: 'src/assets/images/category16/16.2.jpg', publicId: '16.2', size: 10771154 },
  { local: 'src/assets/images/category16/16.3.jpg', publicId: '16.3', size: 11432727 },
  { local: 'src/assets/images/category16/16.4.jpg', publicId: '16.4', size: 14605352 },
];

async function compressAndUpload() {
  console.log('Starting compression and upload process...\n');
  
  for (const img of imagesToProcess) {
    try {
      const fullPath = path.join(__dirname, img.local);
      const compressedPath = fullPath.replace('.jpg', '-compressed.jpg');
      
      console.log(`\n📦 Processing ${img.publicId}...`);
      console.log(`   Original size: ${(img.size / 1024 / 1024).toFixed(2)} MB`);
      
      // Compress using sips (macOS tool)
      console.log(`   Compressing...`);
      execSync(`sips -s format jpeg -s formatOptions 70 "${fullPath}" --out "${compressedPath}"`, { stdio: 'pipe' });
      
      // Check compressed size
      const stats = fs.statSync(compressedPath);
      console.log(`   Compressed size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
      
      if (stats.size > 10485760) {
        console.log(`   ⚠️  Still too large, compressing more...`);
        execSync(`sips -s format jpeg -s formatOptions 50 "${fullPath}" --out "${compressedPath}"`, { stdio: 'pipe' });
        const stats2 = fs.statSync(compressedPath);
        console.log(`   Final size: ${(stats2.size / 1024 / 1024).toFixed(2)} MB`);
      }
      
      // Upload to Cloudinary
      console.log(`   Uploading to Cloudinary...`);
      const result = await cloudinary.uploader.upload(compressedPath, {
        public_id: img.publicId,
        overwrite: true,
        resource_type: 'image'
      });
      
      console.log(`   ✅ Uploaded! Public ID: ${result.public_id}`);
      
      // Clean up compressed file
      fs.unlinkSync(compressedPath);
      
    } catch (error) {
      console.error(`   ❌ Error processing ${img.publicId}:`, error.message);
    }
  }
  
  console.log('\n\n✅ All images processed!');
  console.log('\nNow update CategoryDetail.js with these public IDs:');
  console.log('category4: [\'4.1_[ID]\', \'4.2_[ID]\', \'4.3_[ID]\', \'4.4_subfc0\', \'4.6_[ID]\', \'4.7_piklfe\', \'4.8_xaovzy\']');
  console.log('category6: add \'6.1_[ID]\' to the beginning');
  console.log('category16: [\'16.1_[ID]\', \'16.2_[ID]\', \'16.3_[ID]\', \'16.4_[ID]\']');
}

compressAndUpload();

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Read .env file
const envPath = path.join(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};

envContent.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) {
    envVars[key.trim()] = value.trim();
  }
});

// Configure Cloudinary
cloudinary.config({
  cloud_name: envVars.REACT_APP_CLOUDINARY_CLOUD_NAME,
  api_key: envVars.REACT_APP_CLOUDINARY_API_KEY,
  api_secret: envVars.REACT_APP_CLOUDINARY_API_SECRET
});

console.log('🚀 Uploading hero images to Cloudinary...\n');
console.log('Cloud Name:', envVars.REACT_APP_CLOUDINARY_CLOUD_NAME);
console.log('');

let successCount = 0;
let failCount = 0;

// Upload function
async function uploadHeroImage(categoryNum) {
  const localPath = path.join(__dirname, `src/assets/images/category${categoryNum}/heroImage${categoryNum}.jpg`);
  const publicId = `heroImage${categoryNum}`;
  
  if (!fs.existsSync(localPath)) {
    console.log(`⚠️  Category ${categoryNum}: File not found`);
    failCount++;
    return;
  }
  
  try {
    console.log(`📤 Uploading Category ${categoryNum}...`);
    
    const result = await cloudinary.uploader.upload(localPath, {
      public_id: publicId,
      overwrite: true,
      resource_type: 'image'
    });
    
    console.log(`   ✅ ${publicId} uploaded successfully (${(result.bytes / 1024).toFixed(0)} KB)`);
    successCount++;
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message}`);
    failCount++;
  }
}

// Upload all hero images sequentially
async function uploadAll() {
  for (let i = 1; i <= 18; i++) {
    await uploadHeroImage(i);
  }
  
  console.log('\n' + '='.repeat(50));
  console.log(`✅ Upload complete!`);
  console.log(`   Success: ${successCount}/18`);
  console.log(`   Failed: ${failCount}/18`);
  console.log('='.repeat(50));
  
  if (successCount === 18) {
    console.log('\n🎉 All hero images uploaded successfully!');
    console.log('🔄 Refresh your website to see the correct images');
  }
}

uploadAll();

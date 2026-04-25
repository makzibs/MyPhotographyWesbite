const https = require('https');
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

const CLOUD_NAME = envVars.REACT_APP_CLOUDINARY_CLOUD_NAME;
const API_KEY = envVars.REACT_APP_CLOUDINARY_API_KEY;
const API_SECRET = envVars.REACT_APP_CLOUDINARY_API_SECRET;

console.log('🔄 This script will help you upload hero images with proper names\n');
console.log('Cloud Name:', CLOUD_NAME);
console.log('\n📋 Instructions:\n');
console.log('1. Go to your Cloudinary dashboard: https://console.cloudinary.com/');
console.log('2. Click "Media Library"');
console.log('3. For each category (1-18):');
console.log('   - Upload: src/assets/images/category1/heroImage.jpg');
console.log('   - Public ID: heroImage1');
console.log('   - Upload: src/assets/images/category2/heroImage.jpg');
console.log('   - Public ID: heroImage2');
console.log('   ... and so on\n');

console.log('OR use the Cloudinary Upload Widget / CLI:\n');
console.log('Example using cURL:\n');

for (let i = 1; i <= 18; i++) {
  const localPath = `src/assets/images/category${i}/heroImage.jpg`;
  if (fs.existsSync(localPath)) {
    console.log(`# Upload Category ${i} hero image:`);
    console.log(`curl -X POST "https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload" \\`);
    console.log(`  -F "file=@${localPath}" \\`);
    console.log(`  -F "public_id=heroImage${i}" \\`);
    console.log(`  -F "api_key=${API_KEY}" \\`);
    console.log(`  -F "timestamp=$(date +%s)" \\`);
    console.log(`  -F "signature=YOUR_SIGNATURE"\n`);
  }
}

console.log('\n💡 EASIER METHOD: Use Cloudinary Dashboard');
console.log('1. Go to: https://console.cloudinary.com/console/media_library');
console.log('2. Click "Upload"');
console.log('3. Select all 18 heroImage.jpg files from your category folders');
console.log('4. Rename them during upload to: heroImage1, heroImage2, ... heroImage18');
console.log('\nAfter uploading, I will update the code to use these new names!');

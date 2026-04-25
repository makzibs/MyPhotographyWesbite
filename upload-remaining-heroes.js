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

console.log('🚀 Uploading remaining compressed hero images...\n');

async function uploadCompressed() {
  // Upload category 7
  try {
    console.log('📤 Uploading Category 7 (compressed)...');
    const result7 = await cloudinary.uploader.upload(
      'src/assets/images/category7/heroImage7-compressed.jpg',
      { public_id: 'heroImage7', overwrite: true }
    );
    console.log(`   ✅ heroImage7 uploaded (${(result7.bytes / 1024).toFixed(0)} KB)`);
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message}`);
  }
  
  // Upload category 16
  try {
    console.log('📤 Uploading Category 16 (compressed)...');
    const result16 = await cloudinary.uploader.upload(
      'src/assets/images/category16/heroImage16-compressed.jpg',
      { public_id: 'heroImage16', overwrite: true }
    );
    console.log(`   ✅ heroImage16 uploaded (${(result16.bytes / 1024).toFixed(0)} KB)`);
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message}`);
  }
  
  console.log('\n🎉 All hero images are now uploaded!');
  console.log('🔄 Refresh your website to see all categories with correct images');
}

uploadCompressed();

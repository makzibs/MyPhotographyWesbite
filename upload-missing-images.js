require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const path = require('path');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Images that need to be uploaded to Cloudinary
const missingImages = [
  // Category 4
  { local: 'src/assets/images/category4/4.1.jpg', publicId: '4.1' },
  { local: 'src/assets/images/category4/4.2.jpg', publicId: '4.2' },
  { local: 'src/assets/images/category4/4.3.jpg', publicId: '4.3' },
  { local: 'src/assets/images/category4/4.6.jpg', publicId: '4.6' },
  
  // Category 6
  { local: 'src/assets/images/category6/6.1.jpg', publicId: '6.1' },
  
  // Category 16
  { local: 'src/assets/images/category16/16.1.jpg', publicId: '16.1' },
  { local: 'src/assets/images/category16/16.2.jpg', publicId: '16.2' },
  { local: 'src/assets/images/category16/16.3.jpg', publicId: '16.3' },
  { local: 'src/assets/images/category16/16.4.jpg', publicId: '16.4' },
];

async function uploadMissingImages() {
  console.log('Starting upload of missing images to Cloudinary...\n');
  
  for (const img of missingImages) {
    try {
      const fullPath = path.join(__dirname, img.local);
      console.log(`Uploading ${img.publicId}...`);
      
      const result = await cloudinary.uploader.upload(fullPath, {
        public_id: img.publicId,
        overwrite: true,
        resource_type: 'image'
      });
      
      console.log(`✅ ${img.publicId} uploaded successfully! Public ID: ${result.public_id}`);
    } catch (error) {
      console.error(`❌ Error uploading ${img.publicId}:`, error.message);
    }
  }
  
  console.log('\n✅ Upload complete!');
  console.log('\nNow update CategoryDetail.js with the actual public IDs from Cloudinary.');
}

uploadMissingImages();

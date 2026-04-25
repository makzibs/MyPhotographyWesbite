require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const path = require('path');

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET
});

async function uploadNewHeroImages() {
  const heroMappings = [
    { local: 'category1-golden-hour-portraits/heroImage1.jpg', cloudinaryId: 'heroImage1' },
    { local: 'category2-studio-portraits/heroImage2.jpg', cloudinaryId: 'heroImage2' },
    { local: 'category3-people-lifestyle/heroImage3.jpg', cloudinaryId: 'heroImage3' },
    { local: 'category4-wedding-photography/heroImage4.jpg', cloudinaryId: 'heroImage4' },
    { local: 'category5-event-photography/heroImage5.jpg', cloudinaryId: 'heroImage5' },
    { local: 'category6-all portraits/heroImage6.jpg', cloudinaryId: 'heroImage6' },
    { local: 'category7-cities and nature/heroImage7.jpg', cloudinaryId: 'heroImage7' }
  ];

  console.log('🎨 Uploading new hero images to match reorganized structure...\n');

  for (const mapping of heroMappings) {
    const localPath = path.join(__dirname, 'src/assets/images', mapping.local);
    
    try {
      console.log(`📤 Uploading ${mapping.cloudinaryId}...`);
      
      const result = await cloudinary.uploader.upload(localPath, {
        public_id: mapping.cloudinaryId,
        overwrite: true,
        resource_type: 'image'
      });
      
      console.log(`   ✅ Success: ${result.public_id}`);
    } catch (error) {
      console.log(`   ❌ Error: ${error.message}`);
    }
  }

  console.log('\n🎉 Done! Hero images updated on Cloudinary.');
  console.log('💡 Refresh your browser to see the correct hero images.');
}

uploadNewHeroImages();

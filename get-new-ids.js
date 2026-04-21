require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY || process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET || process.env.CLOUDINARY_API_SECRET
});

async function getNewIds() {
  const idsToFind = ['4.1', '4.2', '4.3', '4.6', '6.1', '16.1', '16.2', '16.3', '16.4'];
  
  console.log('Fetching public IDs from Cloudinary...\n');
  
  for (const id of idsToFind) {
    try {
      const result = await cloudinary.api.resource(id);
      console.log(`${id}: '${result.public_id}'`);
    } catch (error) {
      console.log(`${id}: Not found or error`);
    }
  }
}

getNewIds();

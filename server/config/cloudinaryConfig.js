const cloudinary = require('cloudinary').v2;

// configuration
cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.cloud_api_key, 
    api_secret: process.env.cloud_api_secret,
    secure: true,
  });

  cloudinary.uploader.upload;
  module.exports = cloudinary ;
import { AdvancedImage, lazyload, placeholder, responsive } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";

const CLDBlurImage = ({
  publicId,
  cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "dtz8zyqhy", 
  width = "100%",            
  height = "auto",
  className = "",            
}) => {
  if (!publicId) return null; 

  const img = new CloudinaryImage(publicId, { cloudName })
    .setDeliveryType("upload")
    .format("auto")       
    .quality(100);     
  return (
    <AdvancedImage
      cldImg={img}
      plugins={[placeholder({ mode: "blur" }), lazyload(), responsive()]}
      style={{ width, height }}
      className={className}
    />
  );
};

export default CLDBlurImage;

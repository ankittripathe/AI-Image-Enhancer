import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImagehandler = async (file) => {
    // console.log(URL.createObjectURL(file));
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);

    try {
      // code which may produce error
    } catch (error) {
      // code to handle the error and show message
    }
  };

  return (
    <>
      {/* 👆 Parent ne ImageUpload ko render kiya AND ek prop bheja */}
      <ImageUpload uploadImagehandler={uploadImagehandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage}
      />
    </>
  );
};

export default Home;

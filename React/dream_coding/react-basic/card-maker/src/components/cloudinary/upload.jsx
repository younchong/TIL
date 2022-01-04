import React from 'react';

const Upload = ({file}) => {
  const imageURL = "https://res.cloudinary.com/dv4boiwlx/image/upload/v1641275175/" + file.lastModified;
      information.Image = imageURL;
      const url = "https://api.cloudinary.com/v1_1/dv4boiwlx/image/upload";
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "qiehg69d");
      formData.append("public_id", file.lastModified)
      return fetch(url, {
              method: "POST",
              body: formData
            })
      .then((res) => res.json())
      .catch((err) => console.log(err));  
}

export default Upload;
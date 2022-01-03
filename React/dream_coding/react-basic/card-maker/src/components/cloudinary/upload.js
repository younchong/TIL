const url = "https://api.cloudinary.com/v1_1/dv4boiwlx/image/upload";

export default function storeImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "qiehg69d");
  return fetch(url, {
          method: "POST",
          body: formData
        })
}
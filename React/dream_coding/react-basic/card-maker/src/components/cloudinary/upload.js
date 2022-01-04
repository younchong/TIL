export default class Upload {
  constructor(file) {
    this.url = "https://api.cloudinary.com/v1_1/dv4boiwlx/image/upload";
    this.formData = new FormData();
    this.formData.append("file", file);
    this.formData.append("upload_preset", "qiehg69d");
    this.formData.append("public_id", file.lastModified)
  }

  send() {
    fetch(this.url, {
      method: "POST",
      body: this.formData
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  }
}
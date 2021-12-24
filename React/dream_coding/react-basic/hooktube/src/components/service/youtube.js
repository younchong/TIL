import axios from "axios";

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3/",
      param: {key: key},
    });
    this.key = key;
  }

  async search(word) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: word,
        key: this.key,
      },
    });
    return response.data.items;
  }

  async mostPopular() {   
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
        key: this.key,
      },
    });
    return response.data.items;
  }
}

export default Youtube;
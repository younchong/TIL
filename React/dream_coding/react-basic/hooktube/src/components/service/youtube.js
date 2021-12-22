
class Youtube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
      };
  }

  async search(word) {
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=cbum&type=video&key="
      let url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="
      url += word + "&type=video&key=" + this.key;
    
    const response = await fetch(url, this.requestOptions);
    const result_1 = await response.json();
    return result_1.items;
  }

  async mostPopular() {   
      let url = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&type=video&key=" + this.key;
      
      try {
      const response = await fetch(url, this.requestOptions);
      const result_1 = await response.json();
      return result_1.items;
    } catch (error) {
      return console.log('error', error);
    }
  }
}

export default Youtube;
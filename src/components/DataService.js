import axios from "axios";

class DataService {
  retrieveImages(searchResult) {
    const instance = axios.create({
      baseURL: "https://api.unsplash.com",
      timeout: 1000,
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
      },
    });

    return instance.get(
      `https://api.unsplash.com/search/photos?query=${searchResult}`
    );
  }
}

export default new DataService();

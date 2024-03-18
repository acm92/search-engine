import axios from "axios";
import secretAPIKey from "./config.js";

class DataService {
  retrieveImages(searchResult) {
    const instance = axios.create({
      baseURL: "https://api.unsplash.com",
      timeout: 1000,
      headers: {
        Authorization: `Client-ID ${secretAPIKey}`,
      },
    });

    return instance.get(
      `https://api.unsplash.com/search/photos?query=${searchResult}`
    );
  }
}

export default new DataService();

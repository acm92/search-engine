import axios from "axios"

class DataService {


    retrieveImages(searchResult) {

        const instance = axios.create({
            baseURL: 'https://api.unsplash.com',
            timeout: 1000,
            headers: { 'Authorization': 'Client-ID MjBDc39EslwFPEK7RTf0tHAav81KM3O3MMTeD_kmY5Y' }
        })

        return instance.get(`https://api.unsplash.com/search/photos?query=${searchResult}`)
    }


}

export default new DataService()
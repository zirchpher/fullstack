// import * as api from '../basic_API_data/datas.js';
class HttpMethods {
    constructor({
        API_KEY,
        API_BASE,
        BASE_IMAGE_URL,
    }) {
        this.API_KEY = API_KEY;
        this.API_BASE = API_BASE;
        this.BASE_IMAGE_URL = BASE_IMAGE_URL;
    }

    async get(endpoint) {
        const data = await axios(`${this.API_BASE}${endpoint}?api_key=${this.API_KEY}`);
        return data;
    }
}

// USOS:
// const trae = new HTTP({
//     API_KEY: tmdbApi.API_KEY,
//     API_BASE: tmdbApi.BASE_API,
//     BASE_IMAGE_URL: tmdbApi.BASE_API_IMAGE_URL,
// });

// import:
// import { HTTP } from './HTTP_METHODS/http.js';

export { HttpMethods as HTTP };
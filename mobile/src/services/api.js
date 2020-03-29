import axios from 'axios';

const api = axios.create({
    baseURL: 'https://1406501e.ngrok.io'
});

export default api;
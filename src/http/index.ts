import axios from "axios";
// const apiURL = process.env.REACT_APP_API_URL;
const http = axios.create({
    // baseURL: apiURL,
    // baseURL: 'https://backend-formulario-numerologia.up.railway.app',
    baseURL: 'http://localhost:8001',
    withCredentials: false
})


export default http
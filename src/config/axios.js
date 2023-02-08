import axios from 'axios';
console.log(process.env.REACT_APP_ENDPOINT_URL);
axios.defaults.baseURL = 'http://localhost:8888';

export default axios;

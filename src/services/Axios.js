import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.BASE_URL_API,
});

export default Axios;

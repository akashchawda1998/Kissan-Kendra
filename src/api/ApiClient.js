import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://kisaankendra.in/wp-json/wc/v3',
  auth: {
    username: 'ck_e9a784047c98ebb02ce6b751f9418beaa3039c45',
    password: 'cs_03c1a1491551deda4e6729a306b036192c99b3db',
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

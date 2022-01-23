import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID XR_TZQ0AOzaGniQ44A3ZYDjZ_UeKmEIQMuGr8VnLnCw',
  },
});

import axios from 'axios';

const searchAPI = axios.create({
  baseURL: 'https://nominatim.openstreetmap.org',
  params: {
    format: 'json',
    limit: 5,
    'accept-language': 'es',
    countrycodes: 'ar',
    addressdetails: '1'
  }
});

export default searchAPI;
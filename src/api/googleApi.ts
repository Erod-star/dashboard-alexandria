import axios from 'axios';

const googleApi = axios.create({
  baseURL: 'https://www.googleapis.com/calendar/v3/calendars/primary/events',
});

googleApi.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer ${localStorage.getItem(
    'provider-token'
  )}`;
  return config;
});

export default googleApi;

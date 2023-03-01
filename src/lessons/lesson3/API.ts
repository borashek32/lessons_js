import axios from 'axios';


const key = 'f928c877';
const configOMB = {
  baseURL: 'http://www.omdbapi.com/',
};
const axiosInstance = axios.create(configOMB);

const API = {
  searchFilmsByTitle: (title: string) => {
    return axiosInstance
      .get(`?apikey=${key}&s=${title}`)
      .then(response => {
        return response.data
      })
  },
  searchFilmsByType: (title: string, type: string) => {
    return axiosInstance
      .get(`?apikey=${key}&s=${title}&type=${type}`)
      .then((response => {
        return response.data
      }))
  }
};

export default API;

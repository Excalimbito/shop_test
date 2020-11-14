import axios from 'axios';

const api = (controller) => {
  return axios.create({
    baseURL: "https://fakestoreapi.com/" + controller
  })
}

export default api
import axios from "axios";


const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchContacts = async () => {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  };
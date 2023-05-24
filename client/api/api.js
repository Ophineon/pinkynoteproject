import axios from 'axios';

// Define a function to fetch data
export const fetchData = () => {
  return axios.get('http://localhost:3000/data')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
};

// Define other API request functions as needed
export const createUser = (userData) => {
  // ...
};
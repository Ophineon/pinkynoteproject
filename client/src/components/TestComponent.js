import React, { useEffect } from 'react';
import axios from 'axios';

const TestComponent = () => {
  useEffect(() => {
    axios.get('/test')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return <div>Testing the database implementation...</div>;
};

export default TestComponent;
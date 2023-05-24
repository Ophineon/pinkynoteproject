import React, { useEffect, useState } from 'react';
import { fetchData } from './api/api';

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then(data => {
        setData(data);
      })
      .catch(error => {
        // Handle error
      });
  }, []);

  return (
    <div>
      {/* Display the fetched data */}
      {data.map(item => (
        <div key={item.id}>
          {/* Display individual data properties */}
          <p>{item.property1}</p>
          <p>{item.property2}</p>
          {/* Add more properties as needed */}
        </div>
      ))}
    </div>
  );
};









export default DataComponent;
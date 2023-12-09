// ApiContext.js
import  { createContext, useState } from 'react';
import axios from 'axios';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState(null);

  
  
  const postData = async (data,api) => {
    try {
      const response = await axios.post(api, data, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
      setData(JSON.stringify(response.data));
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <ApiContext.Provider value={{ data, postData }}>
      {children}
    </ApiContext.Provider>
  );
};

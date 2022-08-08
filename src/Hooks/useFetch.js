import { useEffect, useState } from "react";

export default function useFetch(url) {

  //PARAMETROS PARA PASAR AL FETCH

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const options = {
    'mode': 'no-cors',
    'method': 'GET',
    'headers': {
    'Access-Control-Allow-Origin' : '*',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
}

  useEffect( () => {
   
        setLoading(true);
        console.log(loading);
        
        fetch(url,options) 
        .then(response => setData(response.json()))
        .catch(error => setError(error))
        .finally(setLoading(false))
      // eslint-disable-next-line
      
    },[url]); 
 
  return {data, loading, error };
}
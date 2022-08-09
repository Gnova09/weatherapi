import { useEffect, useState } from "react";

export default function useFetch(url) {

  //PARAMETROS PARA PASAR AL FETCH

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dato = {
      name: "said",
      id: 23
  }

  const options =  {
    method: 'GET', // POST, PUT, DELETE, etc.
   
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }

  useEffect(   () => {
   
        setLoading(true);
        fetch(url,{options})
        .then(response => setData(response.json()))
        .catch(error => setError(error))
        .finally(setLoading(false));

      // eslint-disable-next-line
    },[url]); 
 
  return {data, loading, error};
}
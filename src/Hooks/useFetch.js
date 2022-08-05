import { useEffect, useState } from "react";

export default function useFetch(url) {

  //PARAMETROS PARA PASAR AL FETCH

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect( () => {
    setLoading(true);
      fetch(url)
      .then(response => setData(response.json()))
      .catch(error => setError(error))
      .finally(setLoading(false))
      
  },[url]); 
 
  return {data, loading, error };
}
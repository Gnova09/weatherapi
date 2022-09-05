import { useEffect, useState } from "react";

export default function useFetch(url) {

  //PARAMETROS PARA PASAR AL FETCH

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);


  const options = {
    method: 'GET', // POST, PUT, DELETE, etc.
    mode: "no-cors",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }

  useEffect(() => {

    setLoading(true);
    fetch(url, { options })
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => setError(error))
      .finally(setLoading(false));

    // eslint-disable-next-line
  }, [url]);

  function refetch () {
    
      setLoading(true);
      fetch(url, { options })
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => {
          setError(error);
          console.log(error)
        })
        .finally(setLoading(false));
  }

  return { data, loading, error,refetch };
}
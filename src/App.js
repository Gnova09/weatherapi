import Leftcontainer from "./Containers/Leftcontainer/leftcontainer"
import Weathercontainers from "./Containers/weathercontainers/weathercontainers";
import './App.css'
import useFetch from "./Hooks/useFetch";
import WeatherAPI from "./constant/WeatherAPI";
import DataContext from "./Context/DataContext";
import { useEffect, useState } from "react";


function App() {
  /////COUNTRY//////////
  const [country, setCountry] = useState("London");
  useEffect(()=>{
    refetch();
    console.log(country)
    // eslint-disable-next-line
  },[country]);
  /////GET DATA OF COUNTRY WEATHER/////////
  const { data, loading, refetch } = useFetch(WeatherAPI(country));
  //console.log(data);
 

  ////RENDER//////
  return (

    loading ? <label>Loading....</label>
      : (<div className="App" >
        <DataContext.Provider value={data}>
          <Leftcontainer setCountry={setCountry} />
          <Weathercontainers />
        </DataContext.Provider>

      </div>)
  );
}

export default App;

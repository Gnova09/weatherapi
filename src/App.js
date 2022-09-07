import Leftcontainer from "./Containers/Leftcontainer/leftcontainer"
import Weathercontainers from "./Containers/weathercontainers/weathercontainers";
import './App.css'
import useFetch from "./Hooks/useFetch";
import WeatherAPI from "./constant/WeatherAPI";
import DataContext from "./Context/DataContext";
import { useEffect, useState } from "react";


function App() {

  /////COUNTRY & UNITS//////////
  const [units, setUnits] = useState({
    unit: "metric",
    grades: "ºC",
    wind: "mph",
    visibi: "miles"
  });

  const changesUnit = (celsiu) => {
    const btn_celsius = document.getElementById("C");
    const btn_Fareheint = document.getElementById("F");
    if(celsiu){
      btn_celsius.classList.toggle("TempActive")
      btn_Fareheint.classList.toggle("TempActive")

      setUnits({
        unit: "metric",
        grades: "ºC",
        wind: "mph",
        visibi: "miles"
      })
    }else{
      btn_celsius.classList.toggle("TempActive")
      btn_Fareheint.classList.toggle("TempActive")
      setUnits({
        unit: "imperial",
        grades: "ºF",
        wind: "kmh",
        visibi: "meters"
      })
    }
  }

  const [country, setCountry] = useState("London");
  useEffect(() => {
    refetch();
    console.log(country)
    console.log(units)
    // eslint-disable-next-line
  }, [country, units]);

  /////GET DATA OF COUNTRY WEATHER/////////
  const { data, loading, refetch } = useFetch(WeatherAPI(country, units.unit));
  //console.log(data);

  ////RENDER//////
  return (

    loading ? <label>Loading....</label>
      : (<div className="App" >
        <DataContext.Provider value={{ data, units }}>
          <Leftcontainer setCountry={setCountry} />
          <Weathercontainers changesUnit={changesUnit} />
        </DataContext.Provider>

      </div>)
  );
}

export default App;

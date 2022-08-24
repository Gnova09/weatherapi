import Leftcontainer from "./Containers/Leftcontainer/leftcontainer"
import Weathercontainers from "./Containers/weathercontainers/weathercontainers";
import './App.css'
import useFetch from "./Hooks/useFetch";
import url from "./constant/WeatherAPI";
import DataContext from "./Context/DataContext";


function App() {
  const { data, loading, error } = useFetch(url);
  const daysdata = [
    {
      day: "today",
      img: "Sleet",
      firtsTemp: '16ºC',
      secondTemp: '11ºC'
    },
    {
      day: "tomorrow",
      img: "Sleet",
      firtsTemp: '16ºC',
      secondTemp: '11ºC'
    },
  ];

  if (data != null) {
    console.log(data)
    
  }
  if (error != null) {
    console.log(error);
  }


  return (

    loading ? <label>Loading....</label>
      : (<div className="App" >
        <DataContext.Provider value={daysdata}>
          <Leftcontainer />
          <Weathercontainers />
        </DataContext.Provider>

      </div>)
  );
}

export default App;

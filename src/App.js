import Leftcontainer from "./Containers/Leftcontainer/leftcontainer"
import Weathercontainers from "./Containers/weathercontainers/weathercontainers";
import './App.css'
import useFetch from "./Hooks/useFetch";
import url from "./constant/WeatherAPI";
import { useContext } from "react";



function App() {
  const { data, loading, error } = useFetch(url);
  
 if(data != null){
  console.log(data)
 }
 

  return (

    loading ? <label>Loading....</label> 
    :(<div className="App" >
      
      <Leftcontainer />
      <Weathercontainers />

    </div>)
  );
}

export default App;

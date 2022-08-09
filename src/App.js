import Leftcontainer from "./Containers/Leftcontainer/leftcontainer"
import Weathercontainers from "./Containers/weathercontainers/weathercontainers";
import './App.css'
import useFetch from "./Hooks/useFetch";
import url from "./constant/WeatherAPI";


function App() {
  const { data, loading, error } = useFetch(url);

 if(!loading){
  console.log(data.Result)
 }

  return (
    <div className="App" >

      <Leftcontainer />
      <Weathercontainers />

    </div>
  );
}

export default App;

import Leftcontainer from "./Containers/Leftcontainer/leftcontainer"
import Weathercontainers from "./Containers/weathercontainers/weathercontainers";
import './App.css'
import useFetch from "./Hooks/useFetch";

const llave= "3ca6614042e54a98a8a163036220508";
const Country = "London";
const aqi = "no";
const method = "current.json?"

const params = `${method}key=${llave}&q=${Country}&aqi=${aqi}`;


const url = `http://api.weatherapi.com/v1/${params}`;
console.log(params);


function App() {
  const {data,loading, error} = useFetch(url);
  console.log(data);

  return (
    <div className="App" >
      <Leftcontainer />
      <Weathercontainers />
    </div>
  );
}

export default App;

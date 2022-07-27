import Leftcontainer from "./Containers/Leftcontainer/leftcontainer"
import Weathercontainers from "./Containers/weathercontainers/weathercontainers";
import './App.css'

function App() {
  return (
    <div className="App" >
      <Leftcontainer />
      <Weathercontainers />
    </div>
  );
}

export default App;

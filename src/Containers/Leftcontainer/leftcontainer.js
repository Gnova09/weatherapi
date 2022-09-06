import React, {  useState } from "react";
import "./leftcontainer.css"
import Leftheader from "../../Components/Leftheader/Leftheader";
import LeftBody from "../../Components/Leftbody/Leftbody";
import LeftCountrys from "../../Components/LeftButton/LeftCountrys";


 const Leftcontainer = ({setCountry}) =>{
    const [onclickBotton, setOnclickBottom] = useState(false);
   

    const handleOnClick = () => {
        onclickBotton ? setOnclickBottom(false):setOnclickBottom(true);
       // console.log(onclickBotton);
    } 

    //////We changes this for below useEffect////////
    return (
        <div className="Leftcontainer">
        <Leftheader handleOnClick ={handleOnClick} />
        {onclickBotton ? 
        <LeftCountrys setCountry={setCountry} handleOnClick={handleOnClick}/>
        :<LeftBody/>}
       </div>
    );
}
export default Leftcontainer
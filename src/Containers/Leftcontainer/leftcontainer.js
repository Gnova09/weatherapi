import React, { useEffect, useState } from "react";
import "./leftcontainer.css"
import Leftheader from "../../Components/Leftheader/Leftheader";
import LeftBody from "../../Components/Leftbody/Leftbody";


 const Leftcontainer = ({setCountry}) =>{
    const [onclickBotton, setOnclickBottom] = useState(false);

    const handleOnclick = () => {
        onclickBotton ? setOnclickBottom(false): setOnclickBottom(true);
        console.log(onclickBotton);
    } 

    useEffect(()=>{
        setCountry("München");
        console.log("country")
    },[onclickBotton])

    //////We changes this for below useEffect////////
    return (
        <div className="Leftcontainer">
        <Leftheader handleOnclick ={handleOnclick} />
        {onclickBotton ? 
        <h1>Loading....</h1>
          :<LeftBody/>}
       </div>
    );
}
export default Leftcontainer
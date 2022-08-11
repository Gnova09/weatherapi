import React from "react";
import "./leftcontainer.css"
import Leftheader from "../../Components/Leftheader/Leftheader";
import LeftBody from "../../Components/Leftbody/Leftbody";

 const Leftcontainer = () =>{
    return(
        <div className="Leftcontainer">
           <Leftheader />
            <LeftBody/>
        </div>
    );
}
export default Leftcontainer
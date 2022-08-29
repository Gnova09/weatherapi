import React from "react";
import useData from "../../Hooks/useData";

const DayHighCard = ({title,value,unit}) =>{
   
   
    return(
     
        <div className="HighCard">
            <h3>{title}</h3>
            <span>
                <h1>{value}</h1>
                <h4>{unit}</h4>
            </span>
        </div> 
           
    );
}
export default DayHighCard
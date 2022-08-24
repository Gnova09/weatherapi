import React from "react";
import useData from "../../Hooks/useData";

const DayHighCard = ({title,value,other}) =>{
   
   
    return(
        other===null ? 
        <div className="HighCard">
            <h3>{title}</h3>
            <span>
                <h1>{value}</h1>
               
            </span>
        </div> 
            : 
            <div className="HighCard">
            <h3>{title}</h3>
            <span>
                <h1>{value}</h1>
               
            </span>
            <label>other</label>
        </div> 
    );
}
export default DayHighCard
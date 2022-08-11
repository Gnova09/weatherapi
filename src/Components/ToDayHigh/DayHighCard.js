import React from "react";
import useData from "../../Hooks/useData";

const DayHighCard = ({title,value,unit,other}) =>{
    const data = useData();
    console.log(data );
   
    return(
        other===null ? 
        <div className="HighCard">
            <h3>{title}</h3>
            <span>
                <h1>{value}</h1>
                <h2>{unit}</h2>
            </span>
        </div> 
            : 
            <div className="HighCard">
            <h3>{title}</h3>
            <span>
                <h1>{value}</h1>
                <h2>{unit}</h2>
            </span>
            <label>other</label>
        </div> 
    );
}
export default DayHighCard
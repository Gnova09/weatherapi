import React from "react";
import "./weathercontainers.css"
import DayBox from "../../Components/DayBox/DayBox";
import { daysData } from "../../constant/DaysData";
import DayHighBox from "../../Components/ToDayHigh/DayHighBox";

const Weathercontainers = () => {

   
    return (
        <div className="Weathercontainers">
            {/* 
            grados 
            Temp Prox
            Today highlights
            */}
            <div>
                <div className="Grades">
                    <button className="TempActive">ºC</button>
                    <button>ºF</button>
                </div>
                <div className="TempNextDay">
                    <DayBox DayData={daysData}/>
                </div>
                <div className="TodayHighlights">
                    
                    <DayHighBox />
                </div>
            </div>
        </div>
    );
}
export default Weathercontainers
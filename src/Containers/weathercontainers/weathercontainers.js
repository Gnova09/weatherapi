import React from "react";
import "./weathercontainers.css"
import DayBox from "../../Components/DayBox/DayBox";
import DayHighBox from "../../Components/ToDayHigh/DayHighBox";

const Weathercontainers = () => {

    return (
        <div className="Weathercontainers">
            
            <div className="Grades">
                <button className="TempActive">ºC</button>
                <button>ºF</button>
            </div>
            <div className="TempNextDay">
                <DayBox />
            </div>
            <div className="TodayHighlights">
                <DayHighBox />
            </div>
        </div>
    );
}
export default Weathercontainers
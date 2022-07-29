import React from "react";
import "./weathercontainers.css"
import DayBox from "../../Components/DayBox/DayBox";

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
                    <DayBox />
                </div>
                <div className="TodayHighlights">TODAY HIGHLIGHTS</div>
            </div>
        </div>
    );
}
export default Weathercontainers
import React from "react";
import "./weathercontainers.css"
import DayBox from "../../Components/DayBox/DayBox";
import DayHighBox from "../../Components/ToDayHigh/DayHighBox";

const Weathercontainers = ({changesUnit}) => {

    return (
        <div className="Weathercontainers">
            <div className="Grades">
                <button
                 onClick={()=>changesUnit(true)} 
                 id="C" 
                 className=" TempActive">
                    ºC
                </button>
                <button 
                 onClick={()=>changesUnit(false)} 
                 id="F">
                    ºF
                </button>
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
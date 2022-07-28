import React from "react";
import "./weathercontainers.css"

 const Weathercontainers = () =>{
    return(
        <div className="Weathercontainers">
            {/* 
            grados 
            Temp Prox
            Today highlights
            */}

            <div className="Grades">
                <button className="TempActive">ºC</button>
                <button>ºF</button>
            </div>
            <div className="TempNextDay">
                <div className="DayBox">
                    
                    <h1>Tommorrow</h1>
                    <div className="img-box">
                        <img alt="weather" src={require("../../img/Sleet.png")}/>
                    </div>
                    
                    <h1>
                        <span>16ºC</span>
                        <span>16ºC</span>
                    </h1>
                </div>
            </div>
            <div className="TodayHighlights">TODAY HIGHLIGHTS</div>

        </div>
    );
}
export default Weathercontainers
import React from "react";
import "./leftcontainer.css"

 const Leftcontainer = () =>{
    return(
        <div className="Leftcontainer">
            <div className="leftheader">
                <button className="btm_search">Search for places</button>
                <icon>i</icon>
            </div>
            <div className="leftbody" >
                <div className="weather_img">
                    <img alt="weather" src={require('../../img/Shower.png')}/>
                </div>
                <div className="temp">
                    <label>15</label>
                    <label>°C</label>
                </div>
                <div>
                    <label>Shower</label>
                    <div>
                        <span>today</span>
                        <span>fri. 5 jun</span>
                    </div>
                    <icon>Helsinki</icon>
                </div>
            </div>
        </div>
    );
}
export default Leftcontainer
import React from "react";
import "./leftcontainer.css"

 const Leftcontainer = () =>{
    return(
        <div className="Leftcontainer">
            <div className="leftheader">
                <button className="btn_search">Search for places</button>
                <span>i</span>
            </div>
            <div className="leftbody" >
                <div className="weather_img" >
                    <img alt="weather" src={require('../../img/Shower.png')}/>
                </div>
                <div className="temp">
                    <h1>15ºC</h1>
                </div>
                <div>
                    <label>Shower</label>
                    <div>
                        <span>today</span>
                        <span>fri. 5 jun</span>
                    </div>
                    <span>Helsinki</span>
                </div>
            </div>
        </div>
    );
}
export default Leftcontainer
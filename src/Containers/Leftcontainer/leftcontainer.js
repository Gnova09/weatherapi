import React from "react";

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
            </div>
        </div>
    );
}
export default Leftcontainer
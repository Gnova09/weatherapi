import React from "react";

function LeftBody() {
    
    return(
        <div className="leftbody" >
                <div className="weather_img" >
                    <img style={{"opacity": "1 !important"}} alt="weather" src={require('../../img/Shower.png')}/>
                </div>
                <div className="temp">
                    <h1>15</h1>
                    <span>ºC</span>
                </div>
                <div className="footer">
                    <label>Shower</label>
                    <div>
                        <span>
                            <h3>today</h3>
                            <h3>fri. 5 jun</h3>
                        </span>
                        <span>Helsinki</span>
                    </div>
                </div>
            </div>
    );
}
export default LeftBody;
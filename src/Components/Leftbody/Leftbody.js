import React from "react";
import useData from "../../Hooks/useData";
const options = { weekday: 'short', month: 'short', day: 'numeric' }

function LeftBody() {

    const data = useData();

    if (data !== null) {
        const newdate = new Date(data.list[0].dt_txt)
        console.log(data)
        return (
            <div className="leftbody" >
                <div className="weather_img" >
                    <img style={{ "opacity": "1 !important" }} alt="weather" src={require('../../img/Shower.png')} />
                </div>
                <div className="temp">
                    <h1>{data.list[0].main.temp}</h1>
                    <span>ºC</span>
                </div>
                <div className="footer">
                    <label>Shower</label>
                    <div>
                        <span>
                            <h3>{newdate.toLocaleDateString('en-us', options)}</h3>
                        </span>
                        <span>{data.city.name}</span>
                    </div>
                </div>
            </div>
        );
    } else { return <>Waiting...</> }

}
export default LeftBody;
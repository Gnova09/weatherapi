import React from "react";
import useData from "../../Hooks/useData";
const options = { weekday: 'short', month: 'short', day: 'numeric' }

function LeftBody() {

    const {data,units} = useData();
    
    console.log(data);
    if (data !== null) {
        const newdate = new Date(data.list[0].dt_txt)
        const icon = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`

        return (
            <div className="leftbody" >
                <div className="weather_img" >
                    <img style={{ "opacity": "1 !important" }} alt="weather" src={icon} />
                </div>
                <div className="temp">
                    <h1>{parseInt(data.list[0].main.temp)}</h1>
                    <h1>{units.grades}</h1>
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
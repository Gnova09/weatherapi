import React, { useState, useEffect } from "react";
import DayCard from "./DayCard";
import Scroll from "../Scroll/Scroll";
import useData from "../../Hooks/useData";



const DayBox = () => {
    const data = useData();
    const [dataLoad, setDataLoad] = useState(false);
    const [CardList, setCarList] = useState([]);
    const options= { weekday: 'short',  month: 'short', day: 'numeric'}
    
    useEffect(() => {
        if (data != null) {
            let lastday = new Date("");
            setCarList(data.list.map((day, ID) => {
                const newdate = new Date(day.dt_txt) //CONVERTIMOS la fecha de 2022-8-31 a Wed Aug 31 2022
                 console.log("newdate" + newdate.getDay())
                 console.log("lastday" + lastday.getDay())
                if(lastday.getDay() != newdate.getDay()){
                console.log(newdate.toLocaleDateString('en-us', options));
                    lastday = newdate; 
                    return (
                     
                        <DayCard
                            key={ID}
                            day={newdate.toLocaleDateString('en-us', options)}
                            img={"Sleet"}
                            firtsTemp={day.main.temp_max}
                            secondTemp={day.main.temp_min}
                        /> 
                    )
                    
                }
            })
            )
            
        }setDataLoad(true);
        
    }, [data])

    return (
        dataLoad?
            <Scroll>
                <div className="DayBox">
                    {CardList}
                </div>
            </Scroll> :
            <>waiting...</>
    );
}
export default DayBox;


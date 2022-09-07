import React, { useState, useEffect } from "react";
import DayCard from "./DayCard";
import Scroll from "../Scroll/Scroll";
import useData from "../../Hooks/useData";



const DayBox = () => {
    const {data,units} = useData();
    const [dataLoad, setDataLoad] = useState(false);
    const [CardList, setCarList] = useState([]);
    
    
    useEffect(() => {
        const options= { weekday: 'short',  month: 'short', day: 'numeric'}
        if (data != null) {
            let lastday = new Date("");
            
            setCarList(data.list.map((day, ID) => {
                const newdate = new Date(day.dt_txt) //CONVERTIMOS la fecha de 2022-8-31 a Wed Aug 31 2022

                if(lastday.getDay() !== newdate.getDay()){
                   // console.log(newdate.toLocaleDateString('en-us', options));
                    lastday = newdate; 
                    return (
                        <DayCard
                            key={ID}
                            day={newdate.toLocaleDateString('en-us', options)}
                            img={day.weather[0].icon}
                            firtsTemp={parseInt(day.main.temp_max)}
                            secondTemp={parseInt(day.main.temp_min)}
                            unit={units.grades}
                        /> 
                    )
                    
                }else{return null}
            })
            )
            
        }setDataLoad(true);
        
    }, [data,units])

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


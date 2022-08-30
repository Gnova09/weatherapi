import React, { useState, useEffect } from "react";
import DayCard from "./DayCard";
import Scroll from "../Scroll/Scroll";
import useData from "../../Hooks/useData";



const DayBox = () => {
    const data = useData();
    const [dataLoad, setDataLoad] = useState(false);
    const [CardList, setCarList] = useState([]);

    useEffect(() => {
        if (data != null) {
            setCarList(data.list.map((day, ID) => {
                 return (
                    <DayCard
                        key={ID}
                        day={day.dt_txt}
                        img={"Sleet"}
                        firtsTemp={day.temp_max}
                        secondTemp={day.temp_min}
                    />
                ) 
             
            })
            )
            setDataLoad(true)
        }
    }, [data])

    

    return (
        dataLoad === true ?
            <Scroll>
                <div className="DayBox">
                    {CardList}
                </div>
            </Scroll> :
            <>waiting...</>
    );
}
export default DayBox;


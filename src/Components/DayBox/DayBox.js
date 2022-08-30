import React, { useState, useEffect } from "react";
import DayCard from "./DayCard";
import Scroll from "../Scroll/Scroll";
import useData from "../../Hooks/useData";



const DayBox = () => {
    const data = useData();
    const [dataLoad, setDataLoad] = useState(false);
    const [datacreate,setdatacreate]=useState([]);
    const [canrender,setCanrender]=useState(false);
    const [CardList, setCarList] = useState([]);

    useEffect(() => {
        if (data != null) {
        
            setCarList(data.list.map((day, ID) => {
                setdatacreate(datacreate.includes(day.dt_txt) ?  null : day.dt_txt);
              
                return (
                   
                    <DayCard
                        key={ID}
                        day={day.dt_txt}
                        img={"Sleet"}
                        firtsTemp={day.main.temp_max}
                        secondTemp={day.main.temp_min}
                    />
                )
             
            })
            )
            
        }setDataLoad(true);
        console.log(datacreate)
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


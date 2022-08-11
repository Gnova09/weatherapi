import { useEffect, useState } from "react";
import { daysData } from "../constant/DaysData";

export default function useWeather(data) {
    const {days,setDays}= useState([]);
    const {ready, setReady} = useState(false);

    useEffect(()=>{
        console.log(daysData);
    },[data]);

    return {days, ready};
}
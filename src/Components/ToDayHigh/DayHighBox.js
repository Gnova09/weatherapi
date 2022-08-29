import React, { useState } from "react";
import DayHighCard from "./DayHighCard";
import useData from "../../Hooks/useData";
import { useEffect } from "react";

const HighData = [
  {
    title: "Wind status",
    valor: "",
    unit: "mph",
  },
  {
    title: "Humidity",
    valor: "",
    unit: "%",
    other: true
  },
  {
    title: "Visbility",
    valor: "",
    unit: "miles",
    other: null
  },
  {
    title: "Air Pressure",
    valor: "",
    unit: "mb",
    other: null
  }
]

const DayHighBox = () => {
  const data = useData();
  const {dataLoad,setDataLoad}=useState(false);
  
  // useEffect(() => {
  //    HighData[0].valor= data.list[0].wind.speed
  //    HighData[1].valor= data.list[0].main.humidity
  //    HighData[2].valor= data.list[0].wind.gust
  //    HighData[3].valor= data.list[0].main.pressure 
  // },[dataLoad])

  console.log(HighData);

  const HighList = HighData.map((Values, ID) => {
    return (
      <DayHighCard
        key={ID}
        title={Values.title}
        value={Values.valor}
        unit={Values.unit}
      />
    )
  })
const {canRender,setCanRender} = useState(false);

useEffect(()=>{
  if(canRender){
    return (
      <div className="DayHighBox">
        <h1>TODAY HIGHLIGHTS</h1>
        <div>{HighList}</div>
      </div>
    )
  }else{<>waiting</>}
},[canRender])

  return (
    <div className="DayHighBox">
      <h1>TODAY HIGHLIGHTS</h1>
      <div>{HighList}</div>
    </div>
  );
}
export default DayHighBox
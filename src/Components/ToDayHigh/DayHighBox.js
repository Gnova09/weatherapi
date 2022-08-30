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
  const [dataLoad, setDataLoad] = useState(false);
  useEffect(() => {
    if (data != null) {
      HighData[0].valor = data.list[0].wind.speed
      HighData[1].valor = data.list[0].main.humidity
      HighData[2].valor = data.list[0].wind.gust
      HighData[3].valor = data.list[0].main.pressure
      setDataLoad(true)
    }
  },[data]) 
  
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
   
  return (
    dataLoad===true ? 
      (<div className="DayHighBox">
        <h1>TODAY HIGHLIGHTS</h1>
        <div>{HighList}</div>
      </div> ):<>waiting</>
  );
}
export default DayHighBox
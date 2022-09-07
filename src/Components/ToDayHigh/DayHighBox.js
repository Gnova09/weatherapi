import React, { useState } from "react";
import DayHighCard from "./DayHighCard";
import useData from "../../Hooks/useData";
import { useEffect } from "react";

const HighData = [
  {
    title: "Wind status",
    valor: "",
    unit: "",
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
    unit: "",
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
  const {data, units} = useData();

  const [dataLoad, setDataLoad] = useState(false);

  useEffect(() => {
    if (data != null) {
      HighData[0].valor = data.list[0].wind.speed
      HighData[1].valor = data.list[0].main.humidity
      HighData[2].valor = data.list[0].wind.gust
      HighData[3].valor = data.list[0].main.pressure
      HighData[0].unit = units.wind
      HighData[2].unit = units.visibi
      console.log(units.wind)
      setDataLoad(true)
    }
  },[data,units]) 
  
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
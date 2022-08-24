import React from "react";
import DayHighCard from "./DayHighCard";
import { HighData } from "../../constant/HighLightsData";
import useData from "../../Hooks/useData";

const DayHighBox = () => {
  const data = useData();

  const HighList = HighData.map((Values, i) => {
   
    return (

      <DayHighCard
        key={i}
        title={Values.title}
        value={Values.valor}
        other={Values.other}
      />
    )
  })

  return (
    <div className="DayHighBox">
      <h1>TODAY HIGHLIGHTS</h1>
      <div>{HighList}</div>
    </div>
  );
}
export default DayHighBox
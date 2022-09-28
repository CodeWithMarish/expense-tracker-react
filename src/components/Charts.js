import moment from "moment";
import React, { useState } from "react";

import BarChart from "./BarChart";
import PieChart from "./PieChart";


const Charts = ({ chartName }) => {

  const [barTimeSelect, setBarTimeSelect] = useState('')
  console.log(moment('2022-09', 'YYYY-MM').daysInMonth())
  if (chartName === "pie"){
    return <div className="h-96 w-96"><PieChart/></div>
  }
  return (
    <div>
      <select onChange={(e) => setBarTimeSelect(e.target.value)}>
        <option value={""}>This month</option>
        <option value={"MMM"}>Current Year</option>
        <option value={"ddd"}>Last 7 days</option>
      </select>
    <BarChart barTimeSelect={barTimeSelect}/>
    </div>
  );
};

export default Charts;

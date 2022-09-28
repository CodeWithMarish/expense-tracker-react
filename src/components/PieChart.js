import { useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import {Pie } from "react-chartjs-2";

import Chart from "chart.js/auto";
const PieChart = () => {

  const [chartData, setChartData] = useState([])
  const {transactions} = useSelector(state => state.transaction)

  useEffect(() => {
    let incomes = transactions.filter((t) => t.type === "incomes");
    let expenses = transactions.filter((t) => t.type === "expenses");
    let ie = [
      incomes.reduce((sum, t) => sum + parseFloat(t.amount), 0),
      expenses.reduce((sum, t) => sum + parseFloat(t.amount), 0),
    ];

    setChartData(ie);
  }, [transactions]);
  
  const insightData = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Expense",
        data: [...chartData],

        backgroundColor: ["rgb(187, 247, 208)", "rgb(254,202, 202)"],
        borderColor: ["rgb(0, 0, 0)", "rgb(0,0, 0)"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <Pie

          options={{
            legend: { display: true, position: "right" },
            datalabels: {
              display: true,
            },
          }}
          data={insightData}
        />
  )
}

export default PieChart
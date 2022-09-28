import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import moment, { months } from "moment";

import Chart from "chart.js/auto";
import { useSelector } from "react-redux";
const BarChart = ({barTimeSelect}) => {
  const { transactions } = useSelector((state) => state.transaction);
  // const filteredTransactions = [...transactions.filter((t) => t.transactionDate === barTimeSelect)]

  var getDaysOfMonth = (year, month) => {
    var monthDate = moment(year+'-'+month, 'YYYY-MM');
    var daysInMonth = monthDate.daysInMonth();
    var arrDays = [];

    while(daysInMonth) { 
      var current = moment().date(daysInMonth);
      arrDays.push(current.format('DD-MM-YYYY'));
      daysInMonth--;
    }

    return arrDays;
};
  const labels = [ 
    ...new Set(
      barTimeSelect === "MMM" ? moment.monthsShort() 
      : barTimeSelect === 'DDD' ? moment.weekdaysShort() : getDaysOfMonth(moment().year(),moment().month() + 1)
    ),
  ];
  let isum = [...Array(labels.length).fill(0)];
  let esum = [...Array(labels.length).fill(0)];
  console.log(isum);
  transactions.map((t) => { 
    const { transactionDate, type, amount } = t;
    let mon = moment(transactionDate).format(barTimeSelect || "DD-MM-YYYY");
    labels.map((l, i) => {
      if (l === mon) {
        if (type === "incomes") isum[i] += parseInt(amount);
        else esum[i] += parseInt(amount);
      }
    });
  });

  const barData = {
    labels: labels,
    datasets: [
      {
        label: "Income",
        backgroundColor: "rgb(187, 247, 208)",
        data: [...isum],
      },
      {
        label: "Expense",
        backgroundColor: "rgb(254,202, 202)",

        data: [...esum],
      },
    ],
  };
  return <Bar data={barData} />;
};

export default BarChart;

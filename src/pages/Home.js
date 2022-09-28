import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Charts from "../components/Charts";

const Home = () => {
  const { transactions } = useSelector((state) => state.transaction);
  return (
    <div className="container py-10">
      <div className="box flex justify-between items-center">
        <h4 className="text-xl font-medium">
          Balance:{" "}
          <span className="block mt-2 text-5xl font-bold">
            ₹{" "}
            {transactions
              .reduce((sum, t) => {
                let v =
                  t.type === "expenses"
                    ? Number(sum) - Number(t.amount)
                    : Number(sum) + Number(t.amount);
                return v;
              }, 0)
              .toLocaleString()}
          </span>
        </h4>
        <Link to={"/viewAll"}>
          <button className="btn">View All</button>
        </Link>
      </div>

      <div className="box mt-6">
        <h4>{"Total Spendings"}</h4>
        <div>
          <Charts chartName={"pie"} />
        </div>
        {/* <h4 className='text--balance'>Total Expense: <span>₹ {data.expenses.reduce((v, sum) => sum + v)}</span></h4> */}
      </div>

      <div className="box mt-6">
        <h4>{"Spendings (Incomes vs Expenses)"}</h4>
        <div>
          <Charts chartName={"bar"} />
        </div>
        {/* <h4 className='text--balance'>Total Expense: <span>₹ {data.expenses.reduce((v, sum) => sum + v)}</span></h4> */}
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
  'title': yup.string().required(),
  'amount': yup.number().required().min(10).max(99999999),
  'category': yup.string().required(),
  'transactionDate': yup.number().required()
})
const InputForm = ({ transaction, submitTransaction, cancelTransaction }) => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    console.log("Data", data);
    submitTransaction(data);
  };
  console.log(errors);
  const options = {
    expenses: [
      "Rent",
      "Food",
      "Utilities",
      "Travel",
      "Mobile",
      "Funds/Stocks",
      "Others",
    ],
    incomes: ["Salary", "Profits", "Investments", "Pension", "Others"],
  };
  const [selectedType, setSelectedType] = useState("incomes");

  const resetInputs = () => {
    reset({
      title: "",
      amount: 0,
      type: "incomes",
      category: "salary",
      transactionDate: new Date().getTime(),
    });
  }
  useEffect(() => {
    if (transaction) reset(transaction);
    else resetInputs()
     
  }, [transaction, reset]);

  return (
    <div>
      <h4 className="mb-4 font-medium">{`${transaction ? "Update" : "New"}`} Transaction</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input type="text" placeholder="Title" {...register("id", {required: true, maxLength: 200})} /> */}
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
        />
        <input
          type="number"
          placeholder="Amount"
          {...register("amount")}
        />
        <Controller
          name="type"
          control={control}
          render={({ field }) => {
            return (
              <select
                {...field}
                value={field.value}
                onChange={(e) => {
                  let val = e.target.value;
                  // if (selectedType !== val) {
                    setSelectedType(val);
                    field.onChange(e.target.value);
                  // }
                }}
              >
                <option value="incomes">Income</option>
                <option value="expenses">Expense</option>
              </select>
            );
          }}
        />
        <select {...register("category")}>
          {options[selectedType].map((o) => {
            return (
              <option key={o} value={o.toLowerCase()}>
                {o}
              </option>
            );
          })}
        </select>

        <Controller
          name="transactionDate"
          control={control}
          render={({ field }) => {
            return (
              <ReactDatePicker
                {...field}
                onChange={(date) => {
                  field.onChange(date.getTime());
                }}
                selected={
                  field.value ? new Date(parseInt(field.value)) : new Date()
                }
                maxDate={new Date()}
                dateFormat="dd-MM-yyyy"
              />
            );
          }}
        />
        <p>Error:</p>
        {
          errors && Object.keys(errors).map((t, e) => {
            return <li className="text-red-500 capitalize">{errors[t].message}</li>
          })
        }
        {/* // <DatePicker {...register("transactionDate")}/> */}
        <div className="header-btn-grp">
          <button className="btn" type="submit">
            Submit
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => {
              resetInputs()
              cancelTransaction();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;

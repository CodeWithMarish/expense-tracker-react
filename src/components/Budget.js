import React from "react";
import { useDispatch } from "react-redux";
import { setDeleteModal, setTransactionModal } from "../features/modalSlice";

const Budget = ({ data }) => {
  const dispatch = useDispatch();
  const { title, type, amount } = data;
  return (
    <div key={title} className="box flex flex-col">
      <div className="flex justify-between">
        <p className="text-xl">{title}</p>
        <p className={`rounded text-lg font-medium p-2 amount ${type}`}>
          {type === "expenses" ? "-" : "+"} ₹ {amount.toLocaleString()}
        </p>
      </div>
      <p></p>
      <div className="flex mt-2 space-x-4">
        <button
          onClick={() => {
            dispatch(setTransactionModal({ active: true, transaction: data }));
          }}
          className="btn"
        >
          Edit
        </button>
        <button
          onClick={() => {
            dispatch(setDeleteModal({ active: true, transaction: data }));
          }}
          className="btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Budget;

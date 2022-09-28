import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTransactionModal } from "../features/modalSlice";
import {
  addTransaction,
  updateTransaction,
} from "../features/transactionSlice";
import InputForm from "./InputForm";
import ModalPortal from "./ModalPortal";
const InputModal = () => {
  const { transactionModal } = useSelector((state) => state.modal);
  const { active, transaction } = transactionModal;
  const dispatch = useDispatch();
  console.log("Transaction",transaction)
  const submitTransaction = (data) => {
    if (!transaction) {
      dispatch(
        addTransaction({
          ...data,
        })
      );
    } else {
      dispatch(
        updateTransaction({
          ...data,
        })
      );
    }
    cancelTransaction();
  };

  const cancelTransaction = () => {
    dispatch(setTransactionModal({ active: false, transaction: null }));
  };

  return (
    <div className={`modal ${active ? "active" : ""}`}>
      <InputForm
        transaction={transaction}
        submitTransaction={submitTransaction}
        cancelTransaction={cancelTransaction}
      />
    </div>
  );
};

export default ModalPortal(InputModal);

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal } from "../features/modalSlice";
import { removeTransaction } from "../features/transactionSlice";
import ModalPortal from "./ModalPortal";

const DeleteModal = () => {
  const { deleteModal } = useSelector((state) => state.modal);
  const { active, transaction } = deleteModal;
  const dispatch = useDispatch();
  const deleteTransaction = () => {
    dispatch(removeTransaction(transaction));
    dispatch(setDeleteModal({ active: false, transaction: null }));
  };

  const cancelTransaction = () => {
    dispatch(setDeleteModal({ active: false, transaction: null }));
  };

  return (
    <div className={`modal ${active ? "active" : ""}`}>
      <h4 className="font-medium">Delete Transaction</h4>
      <p>Are you sure to delete Transaction?</p>
      <div className="flex items-center mt-4 space-x-5">
        <button
          onClick={() => {
            deleteTransaction();
          }}
          className="btn"
        >
          Delete
        </button>
        <button
          onClick={() => {
            cancelTransaction("delete");
          }}
          className="btn"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalPortal(DeleteModal);

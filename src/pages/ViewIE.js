import React from "react";
import { useDispatch } from "react-redux";
import {
  NavLink,
  Outlet, useNavigate
} from "react-router-dom";
import DeleteModal from "../components/DeleteModal";
import InputModal from "../components/InputModal";
import { setTransactionModal } from "../features/modalSlice";
//NavLink - adds active class when clicked

const types = ["all", "incomes", "expenses"];

const ViewIE = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <>
    <div className="container max-w-5xl py-10">
      <div className="text-lg font-medium">
        <div className="flex justify-between">
        <button onClick={() => navigate("/")} className="btn">
          {"Home"}
        </button>
        <button onClick={() => dispatch(setTransactionModal({active: true}))} className="btn">
          {"Add Transaction"}
        </button>
        </div>
        <div className="flex space-x-4 my-10">
         { types.map((t) => {
          return <NavLink key={t} className="tab" to={t}>{t.toUpperCase()}</NavLink>
         })}
        </div>
      </div>
      <Outlet />
    </div>
    <InputModal />
    <DeleteModal />
    </>
  );
};

export default ViewIE;

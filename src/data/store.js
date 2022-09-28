import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from '../features/transactionSlice'
import modalReducer from '../features/modalSlice'

export const store = configureStore({
  reducer:{
    transaction: transactionReducer,
    modal: modalReducer
  }
})
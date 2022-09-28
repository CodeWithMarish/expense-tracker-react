import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  transactions: [
    ...JSON.parse(localStorage.getItem('transactions')),
  ]
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: {
      reducer(state, action) {
        console.log(action, state.transactions);
        let transactions = [...state.transactions, action.payload]
        console.log(transactions)
        state.transactions.unshift(action.payload);
        localStorage.setItem("transactions", JSON.stringify([...state.transactions]))

      },
      prepare(transaction) {
        console.log("prepare", transaction);
        const id = nanoid();
        return {
          payload: { id, ...transaction },
        };
      },
    },

    removeTransaction(state, action) {
      const transaction = action.payload;
      state.transactions = state.transactions.filter(
        (t) => transaction.id !== t.id
      );
      localStorage.setItem("transactions", JSON.stringify([...state.transactions]))

    },

    updateTransaction(state, action) {
      let idx = -1;
      let todo = state.transactions.find((t, i) => {
        if (t.id === action.payload.id) {
          idx = i;
        }
        return t.id === action.payload.id;
      });
      state.transactions[idx] = {
        ...todo,
        ...action.payload,
      };
      localStorage.setItem("transactions", JSON.stringify([...state.transactions]))

    },
  },
});

const { actions, reducer } = transactionSlice;
export const { addTransaction, removeTransaction, updateTransaction } = actions;
export default reducer;

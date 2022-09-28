import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    errorModal: {
        error: "",
        active: false
    },

    deleteModal:{
        active: false,
        transaction: null
    },
    transactionModal: {
        transaction: null,
        active: false
    },
}


const modalSlice = createSlice({

    name:"modal",
    initialState,
    reducers:{
        setErrorModal: (state, action) => {
            state.errorModal = {
                ...state.errorModal,
                ...action.payload
            }
        },

        setTransactionModal: (state, action) => {
            state.transactionModal = {
                ...state.transactionModal,
                ...action.payload
            }
        },
        setDeleteModal: (state, action) => {
            state.deleteModal = action.payload
        },

    }
}
);

export const {setTransactionModal, setErrorModal, setDeleteModal} = modalSlice.actions
export default modalSlice.reducer;
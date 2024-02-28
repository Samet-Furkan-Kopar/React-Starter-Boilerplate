import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "auth",
    initialState: {
        currentAccount: false,
        accounts: [
         
        ], 
    },
    reducers: {
        _addAccount: (state, action) => {
            state.accounts.push(action.payload);
        },
        _deleteAccount: (state) => {
            state.currentAccount = false;
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter((account) => account.id !== action.payload);
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this.setCurrentAccount(false);
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload;
        },
    },
});

export const userActions = UserSlice.actions;
export default UserSlice.reducer;

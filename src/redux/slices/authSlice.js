import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'isLoggedIn',
    initialState: {
        value: false
    },
    reducers: {
        loginUser: (state) => {
            state.value = true
        },
        logoutUser: (state) => {
            state.value = false
        }
    }
})

export const {loginUser, logoutUser} = authSlice.actions

export default authSlice.reducer
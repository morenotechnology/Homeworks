import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        stats: 'checking',
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null,
        
    },
    reducers:{
        register:(state, action) => {
            state.email = action.payload.email
        },
        login:(state, action) => {
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoUrl = action.payload.photoUrl;
            state.errorMessage = null;
            state.stats = 'authenticated';
        },
        logout:(state, action) => {
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoUrl = null;
            state.errorMessage = action.payload?.errorMessage || null;
            state.stats = 'not-authenticated';
        },
        checkingCredentials:() =>{
            console.log('checking')
        }
    }
})

export const {register, logout, checkingCredentials, login} = authSlice.actions
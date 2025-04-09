import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking',          // 'checking' | 'authenticated' | 'not-authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
    user: null
  },
  reducers: {
    register: (state, action) => {
      state.status = 'authenticated';
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.photoUrl = action.payload.photoUrl;
      state.user = action.payload;
      state.errorMessage = null;
    },
    logout: (state) => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoUrl = null;
      state.user = null;
      state.errorMessage = null;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
    setError: (state, action) => {
      state.errorMessage = action.payload;
    }
  }
});

export const {
  register,
  logout,
  checkingCredentials,
  setError
} = authSlice.actions;

export default authSlice.reducer;

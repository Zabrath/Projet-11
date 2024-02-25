import { createSlice } from '@reduxjs/toolkit';
import { authentication } from './asyncThunk';

// Permet de gérer le token utilisateur

const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    token: null,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Permet de gérer la déconnexion utilisateur
    logout: (state) => {
        state.token = null;
        state.user = null;
        state.loading= false;
        state.error = null;
        localStorage.removeItem("token")
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(authentication.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.token = null;
        state.user = null;
      })
      .addCase(authentication.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token =  action.payload?.body.token;
        localStorage.setItem("token", action.payload?.body.token)
      })
      .addCase(authentication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.token = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { getUserInfos } from "./asyncThunk";

// SLice permet de gérer les informations utilisateur

const userSlice = createSlice({
  name: "userInfos",
  initialState: {
    infos: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.infos = null;
      })
      .addCase(getUserInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.infos = action.payload;
      })
      .addCase(getUserInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.infos = null;
      });
  },
});

export const { } = userSlice.actions;
export default userSlice.reducer;

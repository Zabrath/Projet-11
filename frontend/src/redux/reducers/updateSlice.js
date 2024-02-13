import { createSlice } from '@reduxjs/toolkit';
import { putUser } from './asyncThunk';

const updateUserSlice = createSlice({
  name: 'updateUser',
  initialState: {
    information: null,
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(putUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(putUser.fulfilled, (state, action) => {
        state.loading = false;
        state.information = action.payload;
      })
      .addCase(putUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { } = updateUserSlice.actions;
export default updateUserSlice.reducer;
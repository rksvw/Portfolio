import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialSlice,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.action;

export default userSlice.reducer;

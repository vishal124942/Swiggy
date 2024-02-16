import { createSlice } from "@reduxjs/toolkit";
const username = createSlice({
  name: "username",
  initialState: {
    Username: "",
  },
  reducers: {
    AddUsername: (state, action) => {
      state.Username = action.payload;
    },
    deleteUsername: (state, action) => {
      state.Username = "";
    },
  },
});
export const { AddUsername, deleteUsername } = username.actions;
export default username.reducer;

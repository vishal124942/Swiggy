import { createSlice } from "@reduxjs/toolkit";
const username = createSlice({
  name: "username",
  initialState: {
    username: "",
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    deleteUsername: (state, action) => {
      state.username = "";
    },
  },
});
export const { setUsername, deleteUsername } = username.actions;
export default username.reducer;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./usernameSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    username: userReducer,
  },
});
export default appStore;

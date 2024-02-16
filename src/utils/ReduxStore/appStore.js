import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./AuthSlice";
import userReducer from "./usernameSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    username: userReducer,
  },
});
export default appStore;

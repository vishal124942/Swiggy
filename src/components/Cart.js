import ItemsList from "./itemsList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/ReduxStore/cartSlice";
import { Context } from "../App";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Cart = () => {
  const { IsAuthenticated } = useContext(Context);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearcart = () => {
    dispatch(clearCart());
  };
  return IsAuthenticated ? (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold">Cart</h1>

      {cartItems.length === 0 ? (
        <h1>Your Cart is Empty please add items to it</h1>
      ) : (
        <div className="w-6/12 m-auto">
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearcart}
          >
            Clear Cart
          </button>
          <ItemsList items={cartItems} />
        </div>
      )}
    </div>
  ) : (
    <Navigate to={"/"} />
  );
};
export default Cart;

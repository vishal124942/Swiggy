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
    <section>
      <div className=" my-[100px]  mx-auto h-auto lg:max-w-[1200px]">
        <h1 className="text-2xl  font-bold">Cart</h1>
        {cartItems.length === 0 && <p>Your Cart is empty </p>}
        <div className="my-4">
          <ItemsList items={cartItems} />
          {cartItems.length !== 0 && (
            <button
              onClick={handleClearcart}
              className="text-white bg-black rounded-lg p-2 m-2 "
            >
              Clear cart
            </button>
          )}
        </div>
      </div>
    </section>
  ) : (
    <Navigate to={"/"} />
  );
};
export default Cart;

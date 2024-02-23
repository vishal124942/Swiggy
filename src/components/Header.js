import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../App.js";
import axios from "axios";
import { server } from "../utils/constants.js";
import toast from "react-hot-toast";
const Title = () => (
  <Link className=" " data-testid="logo" to="/home">
    <div className="text-white flex items-center mx-4">
      <h1 className="font-serif font-bold text-2xl m-0 mx-1">Swiggy </h1>
    </div>
  </Link>
);
const Header = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, loading, setloading } = useContext(Context);
  const LogoutHandler = async () => {
    setloading(true);
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });
      toast.success("Logged Out Successfully");
      navigate("/");
      setIsAuthenticated(false);
      setloading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setloading(false);
    }
  };
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/register", "/"];
  const showHeader = !hideHeaderRoutes.includes(location.pathname);
  const cartItems = useSelector((store) => store.cart.items);
  return showHeader ? (
    <div className={`font-Lato w-full fixed top-0 z-50`}>
      <div className="bg-fixed items-center bg-black shadow-xl flex flex-col sm:justify-between sm:flex-row">
        <Title />
        <div className="nav-items py-2 sm:py-5 whitespace-nowrap">
          <ul className="flex text-white space-x-1 mx-4">
            <li className={`p-2 px-4 rounded-2xl hover:bg-slate-800`}>
              <Link className="" to="/home">
                Home
              </Link>
            </li>
            <li className={`p-2 px-4 rounded-2xl hover:bg-slate-800`}>
              <Link className="" to="/about">
                About
              </Link>
            </li>
            <li className={`p-2 px-4 rounded-2xl hover:bg-slate-800`}>
              <Link data-testid="cart" className="" to="/Cart">
                Cart {`(${cartItems?.length})`}
              </Link>
            </li>
            <li
              className={`p-2 px-4 rounded-2xl hover:bg-slate-800 hover:scale-110`}
            >
              <button disabled={loading} onClick={LogoutHandler}>
                {" "}
                Logout
              </button>
            </li>
            <li className={`p-2 px-4 rounded-2xl`}>Hello</li>
          </ul>
        </div>
      </div>
    </div>
  ) : null;
};
export default Header;

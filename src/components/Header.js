import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../App.js";
import { server } from "../utils/constants.js";
import axios from "axios";
import toast from "react-hot-toast";
import { deleteUsername } from "../utils/ReduxStore/usernameSlice.js";
const Header = () => {
  const dispatch = useDispatch();
  const Usern = useSelector((state) => state.username.Username);
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(Context);
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/register", "/"];
  const showHeader = !hideHeaderRoutes.includes(location.pathname);
  const LogoutHandler = async () => {
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });
      toast.success("Logged Out Successfully");
      navigate("/");
      dispatch(deleteUsername());
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
    }
  };
  const cartItems = useSelector((store) => store.cart.items);

  return showHeader ? (
    <div className="flex justify-between bg-black  border-4 border-black  shadow-md">
      <div className="text-white font-bold text-3xl font-serif m-4 p-4 ">
        Swiggy
      </div>
      <div className="pt-4 mt-6 ">
        <ul className="flex  gap-x-[30px]  font-serif  text-xl font-lightbold text-white contrast-20 drop-shadow-xl tracking-wider 	">
          <li>
            <Link to={"/home"} className="hover:underline duration-150">
              Home
            </Link>{" "}
          </li>
          <li>
            <Link to={"/about"} className="hover:underline duration-150">
              About
            </Link>{" "}
          </li>

          <li className="px-4  ">
            <Link to={"/Cart"} className="hover:underline duration-150">
              Cart-({cartItems.length})
            </Link>
          </li>
          <button onClick={LogoutHandler}> Logout</button>

          <li className="px-4 pr-10 hover:underline duration-150 text-ellipsis">
            Hello
          </li>
        </ul>
      </div>
    </div>
  ) : null;
};
export default Header;

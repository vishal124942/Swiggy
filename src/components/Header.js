import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../utils/ReduxStore/AuthSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username.username);
  const navigate = useNavigate();

  const cartItems = useSelector((store) => store.cart.items);
  const reRoutelogin = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="flex justify-between bg-black  border-4 border-black  shadow-md">
      <div className="text-white font-bold text-3xl font-serif m-4 p-4 ">
        Swiggy
      </div>
      <div className="pt-4 mt-6 ">
        <ul className="flex  gap-x-[30px]  font-serif  text-xl font-lightbold text-white contrast-20 drop-shadow-xl tracking-wider 	">
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

          <button
            className="hover:underline duration-150"
            onClick={reRoutelogin}
          >
            Logout
          </button>
          <li className="px-4 pr-10 hover:underline duration-150 text-ellipsis">
            Hello ,{username}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

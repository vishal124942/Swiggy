import RestaurantCard, { withPromotedLabel } from "./RestaurantCard.js";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../App.js";
import { MockData } from "../utils/MockData.js";
import CROSS from "../img/close.png";
const Body = () => {
  const navigate = useNavigate();
  const { IsAuthenticated } = useContext(Context);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [filtereddone, setfilteredone] = useState(false);
  const [searchText, setsearchText] = useState([]);
  const [Topdone, setTopdone] = useState(false);
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  if (!IsAuthenticated) navigate("/");
  return (
    <section>
      <div className="container-max my-8">
        <div className="my-16">
          <h1 className="font-bold my-6 text-2xl text-zinc-700">
            Restaurants with online food delivery in Delhi
          </h1>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
              {filtereddone || searchText.length !== 0 ? (
                <img
                  onClick={() => {
                    setfilteredone(false);
                    setsearchText("");
                  }}
                  className="w-5  h-5 cursor-pointer"
                  src={CROSS}
                  alt="cross"
                />
              ) : (
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              )}
            </div>
            <input
              value={searchText}
              placeholder="   Search.. "
              data-testid="searchInput"
              onChange={(e) => setsearchText(e.target.value)}
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              onClick={() => {
                const filteredRestaurant = MockData.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilteredRestaurant(filteredRestaurant);
                setfilteredone(true);
              }}
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
          <div className="py-5 flex bg-pink-50 my-1">
            <div className="">
              {Topdone ? (
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    setTopdone(false);
                    setfilteredRestaurant(MockData);
                  }}
                >
                  All Restaurants
                </button>
              ) : (
                <button
                  className="text-white mx-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    const filteredList = MockData.filter(
                      (res) => res.info.avgRating > 4.3
                    );
                    setfilteredRestaurant(filteredList);
                    setfilteredone(true);
                    setTopdone(true);
                  }}
                >
                  Top Rating Restaurants
                </button>
              )}
            </div>
          </div>
          <div className=" flex flex-wrap  items-center mx-8 w-screen ">
            {(filtereddone ? filteredRestaurant : MockData).map((restaurant) =>
              restaurant.info.avgRating <= 4 ? (
                <Link
                  to={`/restaurant/${restaurant?.info?.id}`}
                  className="cursor-pointer hover:scale-105 duration-150"
                >
                  <PromotedRestaurantCard resData={restaurant} />
                </Link>
              ) : (
                <Link
                  to={`/restaurant/${restaurant?.info?.id}`}
                  className="cursor-pointer hover:scale-105 duration-150"
                >
                  <RestaurantCard
                    data-testid="resCard"
                    key={restaurant.info.id}
                    resData={restaurant}
                  />
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Body;

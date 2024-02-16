import RestaurantCard, { withPromotedLabel } from "./RestaurantCard.js";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../App.js";

const Body = () => {
  const navigate = useNavigate();
  const { IsAuthenticated } = useContext(Context);
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState([]);
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.746211029596637&lng=77.11815845221281&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      const restaurant =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setlistofRestaurants(restaurant || []);
      setfilteredRestaurant(restaurant || []);
    } catch (error) {
      console.log("Data Not able to fetched", error);
    }
  };
  useEffect(() => {
    fetchData();
    return;
  }, []);
  if (!IsAuthenticated) navigate("/");
  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="flex py-3 mt-6 pt-6">
        <div className="flex gap-x-2 pr-7 items-center w-5/12">
          <div className="translate-x-[290px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          <input
            type="text"
            className="bg-slate-200 shadow-md border-2 rounded-md border-black border-solid w-6/12 mr-4"
            value={searchText}
            placeholder="   Search.. "
            data-testid="searchInput"
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />

          <button
            className="text-lg  text-white rounded-xl  border-2 border-black hover:scale-105 duration-150 bg-orange-400 px-4 py-1"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search{" "}
          </button>
        </div>
        <button
          className="text-lg px-4 border-2 border-black bg-orange-400 rounded-xl hover:scale-105 duration-150 text-white "
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating === 4.3
            );
            setfilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className=" flex flex-wrap ">
        {filteredRestaurant.map((restaurant) =>
          restaurant.info.avgRating <= 4 ? (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              className="cursor-pointer hover:scale-105 duration-150"
            >
              <PromotedRestaurantCard resData={restaurant} />
            </Link>
          ) : (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
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
  );
};
export default Body;

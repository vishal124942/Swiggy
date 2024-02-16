import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const [showIndex, setshowIndex] = useState(null);
  var param = useParams();
  // console.log(param.resId);
  var urlID = param.resId;

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const fetchedData = await fetch(
        " https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.746211029596637&lng=77.11815845221281&restaurantId=" +
          urlID +
          "&catalog_qa=undefined&submitAction=ENTER"
      );
      const jsonedData = await fetchedData.json();
      console.log(jsonedData);
      setresInfo(jsonedData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!resInfo) {
    return <Shimmer />;
  }

  const restaurantInfo = resInfo?.cards[0]?.card?.card?.info;
  const ItemcardInfo =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  if (!restaurantInfo || !ItemcardInfo) {
    // Handle the case where restaurantInfo is undefined or null
    return <div>Error: Restaurant information not available</div>;
  }
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  const { name, cuisines, costForTwoMessage } = restaurantInfo;
  // console.log(itemCards);
  return (
    <div className="text-center">
      <h1 className="font-bold  my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      {/* {categories Accordion} */}
      <div className=" ">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={categories.indexOf(category) + `${1}`}
            data={category?.card?.card}
            ShowItems={index === showIndex ? true : false}
            setshowIndex={() => setshowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;

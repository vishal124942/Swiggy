import { useState } from "react";
import { data } from "../utils/RestaurantCategoryInfo";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const [showIndex, setshowIndex] = useState(null);
  const dataMainCard = data.data?.cards?.[0]?.card.card.info;
  const categories =
    data.data?.cards?.[2]?.groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const handleClick = (index) => {
    setshowIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const { name, cuisines, costForTwoMessage } = dataMainCard;
  return (
    <div className="text-center h-screen overflow-x-scroll">
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
            ShowItems={index === showIndex}
            handleClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;

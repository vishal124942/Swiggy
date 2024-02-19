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
  //  console.log(data)

  console.log(categories);
  const { name, cuisines, costForTwoMessage } = dataMainCard;
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

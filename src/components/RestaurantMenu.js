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
  return (
    <section>
      <div className="container my-8 mx-auto lg:max-w-[1200px]">
        <h1> {dataMainCard?.name}</h1>
        {dataMainCard?.cuisines?.[0]}
        {dataMainCard?.costForTwoMessage}

        <div>
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
    </section>
  );
};
export default RestaurantMenu;

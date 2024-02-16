import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/ReduxStore/cartSlice";
import { useDispatch } from "react-redux";
const ItemsList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatching the Action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-bold">
                -Rs {item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute ">
              <button
                className="p-2 text-green-500 bg-white shadow-lg w-24 m-auto z-10 rounded-sm translate-x-8 translate-y-24"
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                Add+
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded-lg"
              alt=""
              // onClick={RemoveItem}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;

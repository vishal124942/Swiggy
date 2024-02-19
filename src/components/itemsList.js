import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/ReduxStore/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const ItemsList = ({ items }) => {
  const dispatch = useDispatch();
  const entities = useSelector((store) => store.cart.items);
  function handleItem(items) {
    dispatch(addItem(items));
  }

  function remove() {
    dispatch(removeItem());
  }
  return (
    <div className="grid gap-4 p-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-4 border border-gray-300 rounded-lg bg-white hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <div className="mb-4">
            <p className="text-lg font-semibold">{item.card.info.name}</p>
            <p className="text-sm text-gray-600">
              ₹{item.card.info.price / 100 || item.card.info.defaultprice}
            </p>
            <p className="text-xs text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="mb-4">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-auto rounded-lg shadow-md"
              alt="item"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <button
                onClick={() => handleItem(item)}
                className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Add+
              </button>

              {entities.length !== 0 && (
                <button
                  onClick={remove}
                  className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Remove -
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;

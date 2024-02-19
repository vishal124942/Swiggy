import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo } = resData.info;
  return (
    <div
      data-testid="resCard"
      className="w-full sm:w-[300px] md:w-[300px] lg:w-[300px] p-4 bg-white rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
    >
      <div className="relative min-w-[180px] min-h-[180px] sm:w-[180px] md:w-[250px] lg:w-[270px] md:h-[180px] lg:h-[200px] sm:h-[180px] pb-3/4 overflow-hidden rounded-md">
        <img
          className="absolute inset-0 h-full w-full object-cover rounded-md"
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt=""
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
          Highlight
        </span>
        <h2 className="mt-2 mb-2 font-bold text-xl truncate">{name}</h2>
      </div>
      <div className="p-4 border-t border-b text-sm text-gray-700">
        <div className="flex items-center mb-2">
          <h4 className="mr-2 text-base bg-green-600 text-white font-medium rounded-md p-1">
            ⭐{avgRating}
          </h4>
          <h3 className="font-semibold">{costForTwo ?? "₹200 for two"}</h3>
        </div>
        <p className="text-sm">{cuisines}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <div className="bg-black w-[90px]  px-1 translate-y-[50px] translate-x-[20px] rounded-md">
          <label className="  text-white ">Promoted</label>
        </div>

        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;

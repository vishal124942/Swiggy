import { CDN_URL } from "../utils/constants.js";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo } = resData?.info;

  return (
    <div
      data-testid="resCard"
      className="m-3 p-3 mt-3 translate-y-[20px]  w-[250px] shadow-xl my-auto  flex flex-col gap-[30px]"
    >
      <img
        className="noddles-img  border-2 border-black shadow-lg"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="noodles-img"
      />
      <div className="px-4 overflow-auto  flex flex-col items-center ">
        <h3 className=" font-bold">{name}</h3>
        <h4 className="text-sm ">{cuisines.join(",")}</h4>
        <div className="flex bg-green-800 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
              clipRule="evenodd"
            />
          </svg>

          <h4 className=" w-8  bg-green-800 pl-1 text-white font-bold">
            {avgRating}
          </h4>
        </div>

        <h4>{costForTwo}</h4>
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

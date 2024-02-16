import { Navigate } from "react-router-dom";
import { Context } from "../App";
import { useContext } from "react";

export const About = () => {
  const { IsAuthenticated } = useContext(Context);
  return IsAuthenticated ? (
    <div>
      <div className="bg-orange-500 h-[350px]">
        <div className="translate-x-[100px]">
          <img
            src="https://careers.swiggy.com/assets/img/inverted-commas.png"
            alt=""
          />
        </div>
        <div className="w-10/12 translate-x-[100px] font-serif text-white text-4xl">
          Our mission is to elevate the quality of life for the urban consumer
          with unparalleled convenience. Convenience is what makes us tick. It's
          what makes us get out of bed and say, "Let's do this."
        </div>
      </div>
      <div>
        <div className="font-serif text-4xl font-bold text-center mb-3 pt-8">
          Our Journey
        </div>
        <img
          src="https://careers.swiggy.com/assets/img/Swiggy-Journey.jpg"
          alt=""
        />
      </div>
    </div>
  ) : (
    <Navigate to={"/"} />
  );
};

import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import BURGER from "../img/burger.png";
import { Context } from "../App";
const Front = () => {
  const { IsAuthenticated } = useContext(Context);
  if (IsAuthenticated) return <Navigate to={"/home"} />;
  return (
    <div className="flex  justify-between  w-screen">
      <div className="flex  justify-between  w-2/3">
        <div className=" flex items-center -translate-y-48 translate-x-16 ">
          <img
            className="w-8 h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRtiUJEHWRmXZ8z-IMoxFvhRowg6TPDrjgWKEtrvd0Q&s"
            alt=""
          />
          <h1 className="font-bold text-3xl px-2">Swiggy</h1>
          <div className="flex flex-col translate-y-48 gap-y-4 ">
            <h1 className="font-bold text-3xl">
              Create your{" "}
              <strong className="font-bold text-3xl text-green-600">
                Swiggy
              </strong>{" "}
              account to unlock a personalized dining experience.
            </h1>
            <h2 className="text-xl text-gray-700">
              Save your favorite restaurants, track your order history, and set
              your preferences for a seamless, tailored journey through our
              culinary wonderland.
            </h2>
          </div>
        </div>
        <div className="flex gap-x-2 translate-y-12 -translate-x-40 text-center relative z-100">
          <Link
            to="/login"
            className="cursor-pointer hover:bg-gray-100 duration-150 w-20 h-9  pt-1 text-center bg-white border-2 rounded-md  border-black shadow-xl font-bold text-black"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="cursor-pointer w-20 h-9 pt-1  hover:bg-gray-100 duration-150 text-center bg-white border-2 rounded-md  border-black shadow-xl font-bold text-black"
          >
            SignUp
          </Link>
        </div>
      </div>
      <div className="translate-y-16 -translate-x-6">
        <img src={BURGER} alt="" />
      </div>
    </div>
  );
};

export default Front;

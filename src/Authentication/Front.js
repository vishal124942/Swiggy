import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import BURGER from "../img/burger.png";
import { Context } from "../App";
const Front = () => {
  const { IsAuthenticated } = useContext(Context);
  if (IsAuthenticated) return <Navigate to={"/home"} />;
  return (
    <>
      <section className="main_section ">
        <div className="container mx-auto lg:max-w-[1200px] sm:mx-10 sm:max-w-[100vw]">
          <div className="headerOne_wrapper flex flex-col lg:flex-row">
            <div className="pt-8 lg:pr-8 lg:max-w-[50vw] sm:max-w-[100vw]">
              <div className="header_Wrapper flex justify-between items-center">
                <div className="logo_wrapper flex items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRtiUJEHWRmXZ8z-IMoxFvhRowg6TPDrjgWKEtrvd0Q&s"
                    className="w-8 h-10"
                    alt="logo"
                  />
                  <div className="text-black font-bold uppercase font-sans text-2xl ml-2">
                    Swiggy
                  </div>
                </div>
                <div className="wrapper_button lg:ml-auto">
                  <div className="flex gap-3">
                    <Link to="/login">
                      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Login
                      </button>
                    </Link>
                    <Link to="/register">
                      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        Sign up
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-20">
                <h1 className="text-4xl font-bold text-center mt-8 mb-6 text-gray-800">
                  Create your <span className="text-green-500">Swiggy</span>{" "}
                  account to unlock a personalized dining experience.
                </h1>
                <p className="text-lg text-center text-gray-600 mb-8">
                  Save your favorite restaurants, track your order history, and
                  set your preferences for a seamless, tailored journey through
                  our culinary wonderland.
                </p>
              </div>
            </div>
            <div className="hidden lg:block absolute left-[50% + 80px] transform right-0 bg-cover bg-no-repeat h-full bg-hsla-26-5-70-20">
              <img
                src={BURGER}
                className="lg:w-[40vw] lg:h-[40vw] md:w-3 md:h-3"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Front;

import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { server } from "../utils/constants";
import toast from "react-hot-toast";
import { useContext } from "react";
import { Context } from "../App";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { IsAuthenticated, setIsAuthenticated } = useContext(Context);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/users/new`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setIsAuthenticated(true);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
    }
  };

  if (IsAuthenticated) return <Navigate to={"/home"} />;
  return (
    <section className="w-screen h-screen flex justify-center items-center ">
      <form
        onSubmit={submitHandler}
        className=" flex flex-col space-y-2 rounded-md bg-white border-2 pb-4 border-black shadow-xl h-84 w-64"
      >
        <h1 className="translate-x-6 mt-3  font-bold text-2xl">SIGNUP</h1>
        <div className="flex flex-col translate-x-3">
          <h1 className="ml-3">Username</h1>
          <input
            className="w-48 rounded-md h-8 ml-3 border-2 border-black shadow-md"
            type="text"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col translate-x-3">
          <h1 className="ml-3">Email</h1>
          <input
            className="w-48 rounded-md h-8 ml-3 border-2 border-black shadow-md"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col translate-x-3">
          <h1 className="ml-3">Password</h1>
          <input
            className="w-48 h-8 ml-3 rounded-md border-2 border-black shadow-md"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-20 h-8 font-bold translate-x-6 rounded-md  bg-green-600 text-white"
        >
          Sign Up
        </button>
        <div className="flex translate-x-6  space-x-2">
          <h1>Already a User?</h1>
          <Link to="/login" className="font-bold text-orange-600">
            Log In
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Register;

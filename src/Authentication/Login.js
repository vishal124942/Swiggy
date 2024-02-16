import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { server } from "../utils/constants";
import { Context } from "../App";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { IsAuthenticated, setIsAuthenticated, loading, setloading } =
    useContext(Context);
  const submitHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const { data } = await axios.post(
        `${server}/users/login`,
        {
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
      setloading(false);
    } catch (error) {
      toast.error("Invalid Credentials");
      console.log(error);
      setIsAuthenticated(false);
      setloading(false);
    }
  };
  if (IsAuthenticated) return <Navigate to={"/"} />;
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={submitHandler}
        className=" flex flex-col space-y-3 rounded-md bg-white border-2 border-black shadow-xl h-72 w-64"
      >
        <h1 className="translate-x-6 mt-3  font-bold text-2xl">LOGIN</h1>
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
          disabled={loading}
          type="submit"
          className="w-20 h-8 font-bold translate-x-6 rounded-md  bg-green-600 text-white"
        >
          Login
        </button>

        <div className="flex translate-x-6 space-x-2">
          <h1>New User ? </h1>
          <button onClick={() => navigate("/register")} className="font-bold">
            Create Account
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;

import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { About } from "./components/About.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Cart from "./components/Cart.js";
import axios from "axios";
import { server } from "./utils/constants.js";
import toast, { Toaster } from "react-hot-toast";
import Front from "./Authentication/Front.js";
import "./index.css";
import Login from "./Authentication/Login.js";
import Register from "./Authentication/Register.js";

export const Context = createContext({
  IsAuthenticated: false,
  loading: false,
  user: {},
  setIsAuthenticated: () => {},
  setloading: () => {},
  setUser: () => {},
});

const App = () => {
  const [IsAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setUser({});
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        IsAuthenticated,
        setIsAuthenticated,
        loading,
        user,
        setloading,
        setUser,
      }}
    >
      <Router>
        <>
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={IsAuthenticated ? <Navigate to="/home" /> : <Front />}
            />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Body />} />
            <Route path="/restaurant/:id" element={<RestaurantMenu />} />
          </Routes>
          <Toaster />
        </>
      </Router>
    </Context.Provider>
  );
};

export default App;

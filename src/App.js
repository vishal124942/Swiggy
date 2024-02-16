import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/ReduxStore/appStore.js";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { About } from "./components/About.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Cart from "./components/Cart.js";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
        </Routes>
      </div>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Router>
        <AppLayout />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

export default AppLayout;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Header from "./Components/Header/Header";

function Routing() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routing;

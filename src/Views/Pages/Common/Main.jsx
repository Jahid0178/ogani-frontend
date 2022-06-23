import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../About/About";
import { ContactUs } from "../ContactUs/ContactUs";
import { Home } from "../Home/Home";
import { Products } from "../Products/Products";

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

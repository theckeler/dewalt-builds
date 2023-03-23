import React from "react";
import { Routes, Route } from "react-router-dom";
import "../scss/main.scss";

import Home from "./Home";
import PaasCal from "../PaasCal/index";
import PaidMedia from "../PaidMedia/index";

const HomeIndex = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/paid-media" element={<PaidMedia />} />
    </Routes>
  );
};
export default HomeIndex;

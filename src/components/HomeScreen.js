import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav />

      {/* Banners */}
      <Banner />

      {/* Rows */}
    </div>
  );
};

export default HomeScreen;
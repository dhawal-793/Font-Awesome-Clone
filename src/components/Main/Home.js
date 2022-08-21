import React from "react";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import NewFeatures from "../Home/NewFeatures";
import OpenSource from "../Home/OpenSource";
import Topbar from "../Home/Topbar";

const Home = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Hero />
      <NewFeatures />
      <OpenSource />
    </>
  );
};

export default Home;

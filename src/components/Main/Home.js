import React from "react";
import Topbar from "../Home/Topbar";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import NewFeatures from "../Home/NewFeatures";
import OpenSource from "../Home/OpenSource";
import StylingTools from "../Home/StylingTools";
import Customize from "../Home/Customize";
import Pro from "../Home/Pro";

const Home = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Hero />
      <NewFeatures />
      <OpenSource />
      <StylingTools />
      <Customize />
      <Pro />
    </>
  );
};

export default Home;

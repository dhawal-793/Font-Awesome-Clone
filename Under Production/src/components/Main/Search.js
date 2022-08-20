import React from "react";
import Header from "../Search/Header";
import SearchKeywords from "../Search/SearchKeywords";
import Searchinput from "../Search/Searchinput";
import Mainsection from "../Search/MainSection";
const Search = () => {
  return (
    <>
      <Searchinput />
      <SearchKeywords />
      <Header />
      <Mainsection/>
      
    </>
  );
};

export default Search;

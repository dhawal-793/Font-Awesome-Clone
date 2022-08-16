import React from "react";
import Header from "./Search/Header";
import Main from "./Search/MainSection";
import SearchKeywords from "./Search/SearchKeywords";
import Searchinput from "./Search/Searchinput";
const Search = () => {
  return (
    <>
      <Searchinput />
      <SearchKeywords />
      <Header />
      <Main />
    </>
  );
};

export default Search;

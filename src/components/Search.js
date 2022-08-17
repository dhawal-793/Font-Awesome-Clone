import React from "react";
import Header from "./Search/Header";
import SearchKeywords from "./Search/SearchKeywords";
import Searchinput from "./Search/Searchinput";
const Search = () => {
  return (
    <>
      <Searchinput />
      <SearchKeywords />
      <Header />
    </>
  );
};

export default Search;

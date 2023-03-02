import React from "react";
import SearchVector from "../assets/SearchVector.svg"
import SortButton from "./SortButton"

const { useState } = React;

const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async () => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <button onClick={onClick}><img src={ SearchVector } alt="" /></button>
        <input placeholder="Search" onChange={onChange} className="search-box"/>
      </div>
      <div className="sort-button">
        <SortButton/>
      </div>
    </div>
  );
};

export default Searchbar;

import React from "react";
import './Searchbar.css'
import { SearchVector } from "../../assets/Assets"
import { SortButton } from "../Components"

const Searchbar = (props) => {
  const { onSearch } = props;
  let search = "";

  const onChange = (e) => {
    search = e.target.value
    if (e.target.value.length === 0) {
      onSearch(null);
    } else {
      onSearch(search)
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
      <div>
        <SortButton/>
      </div>
    </div>
  );
};

export default Searchbar;

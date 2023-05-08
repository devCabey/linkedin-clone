import React from "react";
import "./SearchOutstretchItem.css";

function SearchItem({ title, image }) {
  return (
    <div className="search_item_overwrap">
      <img src={image} alt="recent item" />
      <p>{title}</p>
    </div>
  );
}

export default SearchItem;

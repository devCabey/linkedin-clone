import React from "react";
import "./SearchOutstretchItem.css";
import { Search } from "@mui/icons-material";

function SearchTryItem({ title }) {
  return (
    <div className="search_recent_overwrap">
      <Search fontSize="small" />
      <span>{title}</span>
    </div>
  );
}

export default SearchTryItem;

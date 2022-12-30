import React from "react";
import "./SearchOutstretchItem.css";
import { QueryBuilder } from "@mui/icons-material";

function SearchRecentItem({title}) {
  return (
    <div className="search_recent_overwrap">
      <QueryBuilder
        fontSize="small"
      />
      <span>{title}</span>
    </div>
  );
}

export default SearchRecentItem;

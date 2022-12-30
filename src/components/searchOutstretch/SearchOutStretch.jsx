import React from "react";
import "./SearchOutStretch.css";
import SearchItem from "./searchRecentItem/SearchItem";
import SearchRecentItem from "./searchRecentItem/SearchRecentItem";
import SearchTryItem from "./searchRecentItem/SearchTryItem";
function SearchOutStretch({ show }) {
  return (
    <div
      className={`search_outstretch  ${show ? "search_outstretch_show" : ""}`}
    >
      <div className="search_outstretch_wrapper">
        <div className="search_outstretch_top">
          <div className="search_outstretch_top_head">
            <span>Recent</span>
            <span>Clear</span>
          </div>
          <div className="search_outstretch_item">
            <SearchItem
              title="turntabl"
              image="https://media.licdn.com/dms/image/C4D0BAQF45g9SOUS3dg/company-logo_200_200/0/1600695531088?e=2147483647&v=beta&t=mgfCnAo7jxG2tyUuD8m4M0kvrtbDawIGbtjlkTKbQyE"
            />
            <SearchItem
              title="CodLogic Software"
              image="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/6357b335d121c50001ecc2ee/picture"
            />
          </div>
          <div className="search_outstretch_recent">
            <SearchRecentItem title="s" />
            <SearchRecentItem title="dfasfafsdfsdf" />
            <SearchRecentItem title="full stack " />
          </div>
        </div>
        <div className="search_outstretch_bottom">
          <div className="search_outstretch_bottom_head">
            <span>Try searching for</span>
          </div>
          <div>
            <SearchTryItem title="software engineer" />
            <SearchTryItem title="full stack developer" />
            <SearchTryItem title="remote web developer" />
            <SearchTryItem title="frontend developer" />
            <SearchTryItem title="freelance frontend developer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchOutStretch;

import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const getSortByClass = sortByOption => {
    if (sortBy === sortByOption) {
      return styles.active;
    }
    return "";
  };

  const handleSortByChange = sortByOption => {
    setSortBy(sortByOption);
  };

  const handleTermChange = ({ target }) => {
    setTerm(target.value);
  };

  const renderSortByOptions = () => (
    Object.keys(sortByOptions).map(
      sortByOption => {
        let sortByOptionValue = sortByOptions[sortByOption];
        return (
          <li
            className={getSortByClass(sortByOptionValue)}
            key={sortByOptionValue}
            onClick={() => {
              handleSortByChange(sortByOptionValue);
            }}
          >
            {sortByOption}
          </li>
        );
      }
    )
  );

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input placeholder="Search Businesses" onChange={handleTermChange} />
        <input placeholder="Where?" />
      </div>
      <div className={styles.SearchBarSubmit}>
        <a>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;

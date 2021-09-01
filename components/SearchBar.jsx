import React from "react";
import styles from "../styles/SearchBar.module.scss";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function SearchBar() {
  return (
    <div className={styles.search_container}>
      <div className={styles.elements_container}>
        <a href="#" className={styles.magnifierIcon}>
          <SearchOutlinedIcon />
        </a>
        <input
          type="text"
          placeholder="Search by song, artist, album..."
          className={styles.input_box}
        />
      </div>
    </div>
  );
}

export default SearchBar;

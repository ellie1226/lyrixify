import styles from '../styles/SearchBar.module.scss';
import React from "react";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

export default function SearchBar() {
  return (
    <div className={styles.box_container}>
      <div className={styles.elements_container}>
        <a href="#">
          <SearchOutlinedIcon />
        </a>
      </div>
    </div>
  );
}

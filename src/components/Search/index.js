import React from "react";
import './style.css'

export default function Search(props) {
  return (
    <div className="search-box">
      <div className="my-search">
        <input
          name="search"
          className="form-control mr-sm-2"
          onChange={props.handleInputChange}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </div>
  );
}

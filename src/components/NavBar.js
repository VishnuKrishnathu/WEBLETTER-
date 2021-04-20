import React from "react";
import "../css/Navbar.css";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function NavBar() {
  const [bool, setBool] = useState(() => {
    return false;
  });

  function expandFunc() {
    if (!bool) {
      const sidebar = document.querySelector(".sidebar");
      sidebar.setAttribute("class", "expanded");
      setBool(true);
    } else {
      const expander = document.querySelector(".expanded");
      expander.setAttribute("class", "sidebar");
      setBool(false);
    }
  }

  return (
    <div className="navbar">
      <div id="hamburger" onClick={expandFunc}>
        <svg width="3vw" height="44" viewBox="0 0 70 44" fill="none">
          <rect width="100%" height="10" fill="#42446A" />
          <rect y="17" width="70" height="10" fill="#42446A" />
          <rect y="34" width="70" height="10" fill="#42446A" />
        </svg>
      </div>
      <SearchBar />
      <div className="upload-icon">
        <svg
          width="35"
          height="35"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="27.5" cy="27.5" r="27.5" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.4792 11.375C27.8936 11.375 28.291 11.5396 28.584 11.8326C28.877 12.1257 29.0417 12.5231 29.0417 12.9375V24.9167H41.0208C41.4352 24.9167 41.8327 25.0813 42.1257 25.3743C42.4187 25.6673 42.5833 26.0648 42.5833 26.4792C42.5833 26.8936 42.4187 27.291 42.1257 27.584C41.8327 27.877 41.4352 28.0417 41.0208 28.0417H29.0417V40.0208C29.0417 40.4352 28.877 40.8327 28.584 41.1257C28.291 41.4187 27.8936 41.5833 27.4792 41.5833C27.0648 41.5833 26.6673 41.4187 26.3743 41.1257C26.0813 40.8327 25.9167 40.4352 25.9167 40.0208V28.0417H13.9375C13.5231 28.0417 13.1257 27.877 12.8326 27.584C12.5396 27.291 12.375 26.8936 12.375 26.4792C12.375 26.0648 12.5396 25.6673 12.8326 25.3743C13.1257 25.0813 13.5231 24.9167 13.9375 24.9167H25.9167V12.9375C25.9167 12.5231 26.0813 12.1257 26.3743 11.8326C26.6673 11.5396 27.0648 11.375 27.4792 11.375Z"
            fill="#9092BC"
          />
        </svg>
      </div>
    </div>
  );
}

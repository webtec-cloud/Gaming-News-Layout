import React from "react";
import Navigation from "./Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <Navigation />
      <div className="Header-text">
        <div className="Heading">
          <h1>PC Gaming New, Reviews and Guides</h1>
        </div>
        <div className="Header-links">
          <span>About us</span>|<span>News</span>|<span>Reviews</span>|
          <span>Articles</span>|<span>#Future</span>
        </div>
        <button>Learn More </button>
      </div>
    </header>
  );
}

export default Header;

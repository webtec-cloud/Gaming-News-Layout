import React, { useState } from "react";
import "./Navigation.css";

function Navigation() {
  const [setShowMenu, setShow] = useState(false);
  return (
    <nav className="navbar">
      <div>
        <p>logo</p>
      </div>
      <div>
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
}

export default Navigation;

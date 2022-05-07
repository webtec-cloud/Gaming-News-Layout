import React from "react";
import "./Gadgets.css";
import { Button } from "react-bootstrap";

const Gadgets = () => {
  return (
    <div>
      <div className="gadgets">
        <h1 className="display-3">Gadgets for your game</h1>
        <Button variant="info">Learn More About Gaming</Button>
      </div>
    </div>
  );
};

export default Gadgets;

import React from "react";
import "./GamingCards.css";

const GamingCards = () => {
  const data = [
    {
      name: "video-games",
      paragraph:
        "this is my paragraph this is my paragraph this is my paragraph this is my paragraph",
    },
    {
      name: "brain stimulation",
      paragraph:
        "this is my paragraph this is my paragraph this is my paragraph this is my paragraph",
    },
    {
      name: "stress relief",
      paragraph:
        "this is my paragraph this is my paragraph this is my paragraph this is my paragraph",
    },
    {
      name: "stress relief",
      paragraph:
        "this is my paragraph this is my paragraph this is my paragraph this is my paragraph",
    },
  ];
  return (
    <div className="GamingCards">
      {data.map((item) => (
        <div className="Gaming-card">
          <h2 style={{ justifyContent: "flex-start" }}>{item.name} </h2>
          <p>{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default GamingCards;

import React from "react";
import "./Downloadgames.css";

const Downloadgames = () => {
  return (
    <div className="download-games">
      <div className="text-section">
        <h1 className="download-heading">
          Looking for games to download for free?
        </h1>
        <p className="download-paragraph">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <button className="download-button" type="#">
          Read More
        </button>
      </div>
      <div className="img-section">
        <img
          src="https://img.freepik.com/free-photo/back-view-gamer-male-playing-shooter-his-powerful-pc-computer-late-night-living-room_482257-22757.jpg?size=626&ext=jpg&ga=GA1.2.368898685.1651850887"
          className="download-img1"
        />
        <img
          src="https://img.freepik.com/free-photo/videogamer-winning-first-person-shooter-tournament-using-rgb-keyboard-professional-headphones-pro-player-man-talking-with-other-players-online-game-competition-powerful-computer_482257-3933.jpg?size=626&ext=jpg&ga=GA1.2.368898685.1651850887"
          className="download-img2"
        />
        <img
          src="https://img.freepik.com/free-photo/men-playing-video-games_137573-639.jpg?w=1380"
          className="download-img3"
        />
        <img
          src="https://img.freepik.com/free-photo/portrait-man-with-glasses-virtual-reality-vr-interacts-with-virtual-screen_99433-259.jpg?size=626&ext=jpg&ga=GA1.2.368898685.1651850887"
          className="download-img4"
        />
      </div>
    </div>
  );
};

export default Downloadgames;

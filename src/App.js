import React from "react";
import "./App.css";
import Contactform from "./Components/Contactform";
import Downloadgames from "./Components/Downloadgames";
import Footer from "./Components/Footer";
import Gadgets from "./Components/Gadgets";
import Gallery from "./Components/Gallery";
import GamingCards from "./Components/GamingCards";
import Header from "./Components/Header";
import VideoGamesBenefit from "./Components/VideoGamesBenefit";

const App = () => {
  return (
    <div class="App">
      <Header />
      <VideoGamesBenefit />
      <GamingCards />
      <Gadgets />
      <Gallery />
      <Downloadgames />
      <Contactform />
      <Footer />
    </div>
  );
};

export default App;

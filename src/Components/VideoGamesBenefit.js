import React from "react";
import "./VideoGamesBenefit.css";

const VideoGamesBenefit = () => {
  return (
    <div className="games-benefits">
      <h2>
        Benefits of <span>Video Games</span> for kids and adults
      </h2>
      <div className="img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          className="img1"
        />

        <img
          src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="img2"
        />
        <img
          src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          className="img3"
        />
        <img
          src="https://images.unsplash.com/photo-1564049489314-60d154ff107d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1183&q=80"
          className="img4"
        />
      </div>
      <div className="card-wrapper">
        <div className="card">
          <h2>Healthy Brain Stimulation</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            autem asperiores nobis deserunt necessitatibus. Vitae, provident
            voluptates autem distinctio enim natus quia quas temporibus
            laudantium, repellendus unde non qui est.
          </p>
          <button className="card-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default VideoGamesBenefit;

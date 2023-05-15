import React from "react";
import venue from "../../../assets/venue.jpg"

const Banner = () => {
  return (
    <div className="hero min-h-[80vh] " style={{ backgroundImage: `url(${venue})` }}>
  <div className="hero-overlay bg-opacity-60 bg-primary"></div>
  <div className="hero-content text-left text-secondary px-16">
    <div className="max-w-md">
      <h1 className="mb-5 md:text-6xl text-4xl font-serif">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn bg-accent text-primary border-none tracking-wider px-5 hover:bg-primary hover:text-secondary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Banner;

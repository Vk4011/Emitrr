import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  

  return (
    <div className="landing-page">
      <h1 className="text-3xl font-bold text-blue-500">
        Welcome to Exploding Kitten!
      </h1>
      <br />
      <br />

      <button className="flex items-center justify-center ">
        <Link to="/signup" className="signup">
          Start Game
        </Link>
      </button>
    </div>
  );
}

export default LandingPage;

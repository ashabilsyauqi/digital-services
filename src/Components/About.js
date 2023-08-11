import React from "react";
import company from "./assets/React-icon.svg.png";

export default function About() {
  return (
    <div className="About" id="About">
      <div className="overlay-about flex-center margin-section">
        <p className="about-us">
          Kami adalah pionir dalam dunia pengembangan web digital,
          mendedikasikan diri kami untuk merangkul inovasi dan mewujudkan visi
          di dunia digital.
        </p>
        <img src={company} alt="/" className="about-img" />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./Locations.css";

const locations = [
  {
    number: "01",
    name: "WHITEFIELD",
    description: "ITPL MAIN ROAD · WHITEFIELD",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90",
  },
  {
    number: "02",
    name: "INDIRANAGAR",
    description: "100 FEET ROAD · INDIRANAGAR",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90",
  },
  {
    number: "03",
    name: "KORAMANGALA",
    description: "80 FEET ROAD · KORAMANGALA",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=90",
  },
  {
    number: "04",
    name: "SADASHIVANAGAR",
    description: "BELLARY ROAD · SADASHIVANAGAR",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90",
  },
  {
    number: "05",
    name: "SARJAPUR",
    description: "SARJAPUR MAIN ROAD · BENGALURU",
    image:
      "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=2200&q=90",
  },
];
export default function Locations() {
  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <section className="locations-section" id="locations">
      {/* Background Images */}
      <div className="locations-background">
        {locations.map((location, index) => (
          <img
            key={location.name}
            src={location.image}
            alt={location.name}
            className={`location-bg-image ${
              activeLocation === index ? "active" : ""
            }`}
          />
        ))}

        <div className="locations-overlay"></div>
        <div className="locations-vignette"></div>
      </div>

      <div className="locations-content">
        {/* Top Label */}
        <div className="locations-top">
          <div className="locations-section-number">
            <span>07</span>
            <i></i>
            <strong>LOCATIONS</strong>
          </div>

          <p>SELECTED PLACES · BENGALURU</p>
        </div>

        {/* Main Heading */}
        <div className="locations-heading">
          <span>PLACES THAT</span>
          <h2>
            FEEL LIKE <em>HOME.</em>
          </h2>
        </div>

        {/* Location List */}
        <div className="locations-list">
          {locations.map((location, index) => (
            <button
              key={location.name}
              className={`location-item ${
                activeLocation === index ? "active" : ""
              }`}
              onMouseEnter={() => setActiveLocation(index)}
              onFocus={() => setActiveLocation(index)}
              onClick={() => setActiveLocation(index)}
            >
              <div className="location-left">
                <span className="location-number">
                  {location.number}
                </span>

                <span className="location-name">
                  {location.name}
                </span>
              </div>

              <div className="location-right">
                <span className="location-description">
                  {location.description}
                </span>

                <span className="location-arrow">↗</span>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom */}
        <div className="locations-bottom">
          <span>05 SELECTED NEIGHBOURHOODS</span>
          <span>BENGALURU, INDIA</span>
        </div>
      </div>

      {/* Large Background Number */}
      <div className="locations-bg-number">07</div>
    </section>
  );
}
import React, { useState } from "react";
import "./WhyAtelier.css";

const principles = [
  {
    number: "01",
    title: "CURATION",
    short: "Beyond the ordinary.",
    description:
      "We search for residences with character, proportion and architectural identity. Every property earns its place in our collection.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90",
  },
  {
    number: "02",
    title: "LOCATION",
    short: "Where life happens.",
    description:
      "The right address is more than a pin on a map. We consider neighbourhood, connection, atmosphere and the life that surrounds a home.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90",
  },
  {
    number: "03",
    title: "DESIGN",
    short: "Details that endure.",
    description:
      "From natural light to material choices, we look closely at the details that transform architecture into an experience.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=90",
  },
  {
    number: "04",
    title: "EXPERIENCE",
    short: "A better way home.",
    description:
      "From the first conversation to the final key, every interaction is designed to feel considered, personal and effortless.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=90",
  },
];

export default function WhyAtelier() {
  const [active, setActive] = useState(0);

  return (
    <section className="why-atelier" id="why-atelier">

      {/* BACKGROUND IMAGES */}
      <div className="why-background">
        {principles.map((item, index) => (
          <div
            key={item.number}
            className={`why-background-image ${
              active === index ? "active" : ""
            }`}
          >
            <img src={item.image} alt={item.title} />
          </div>
        ))}

        <div className="why-dark-overlay"></div>
        <div className="why-gradient"></div>
      </div>


      {/* TOP */}
      <div className="why-top">

        <div className="why-label">
          <span></span>
          <p>04 / WHY ATELIER</p>
        </div>

        <p className="why-top-copy">
          A different perspective
          <br />
          on exceptional living.
        </p>

      </div>


      {/* MAIN HEADING */}
      <div className="why-heading">

        <p className="why-small-title">
          NOT JUST PROPERTY.
        </p>

        <h2>
          A MORE
          <br />
          <em>THOUGHTFUL</em>
          <br />
          WAY HOME.
        </h2>

      </div>


      {/* PRINCIPLES */}
      <div className="why-principles">

        {principles.map((item, index) => (
          <button
            key={item.number}
            className={`why-principle ${
              active === index ? "active" : ""
            }`}
            onMouseEnter={() => setActive(index)}
            onClick={() => setActive(index)}
          >

            <div className="why-principle-top">
              <span>{item.number}</span>

              <span className="why-arrow">
                ↗
              </span>
            </div>

            <div className="why-principle-content">

              <h3>{item.title}</h3>

              <p className="why-principle-short">
                {item.short}
              </p>

              <p className="why-principle-description">
                {item.description}
              </p>

            </div>

          </button>
        ))}

      </div>


      {/* ACTIVE INDICATOR */}
      <div className="why-progress">

        <span>0{active + 1}</span>

        <div className="why-progress-line">
          <div
            style={{
              width: `${((active + 1) / principles.length) * 100}%`,
            }}
          />
        </div>

        <span>04</span>

      </div>


      {/* BOTTOM STATEMENT */}
      <div className="why-bottom">

        <span>THE ATELIER APPROACH</span>

        <p>
          Because where you live
          <br />
          shapes how you live.
        </p>

      </div>

    </section>
  );
}
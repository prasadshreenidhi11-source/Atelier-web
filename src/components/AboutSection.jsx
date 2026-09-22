import React from "react";
import "./AboutSection.css";

const aboutImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90";

export default function AboutSection() {
  return (
    <section className="about-section" id="about">

      {/* TOP LABEL */}
      <div className="about-top">
        <div className="about-label">
          <span></span>
          <p>03 / ABOUT ATELIER</p>
        </div>

        <p className="about-top-copy">
          Real estate, considered differently.
        </p>
      </div>


      {/* MAIN STATEMENT */}
      <div className="about-statement">

        <h2>
          WE BELIEVE
          <br />
          <em>A HOME</em>
          <br />
          IS MORE THAN
          <br />
          <span>A PLACE.</span>
        </h2>

        <div className="about-statement-side">
          <span>01</span>
          <div></div>
          <p>
            We discover residences with character,
            architecture and a sense of belonging.
          </p>
        </div>

      </div>


      {/* IMAGE + STORY */}
      <div className="about-story">

        <div className="about-image">
          <img src={aboutImage} alt="Architectural luxury residence" />

          <div className="about-image-overlay"></div>

          <div className="about-image-caption">
            <span>BENGALURU</span>
            <strong>INDIA · 2026</strong>
          </div>
        </div>


        <div className="about-story-content">

          <div className="about-story-number">
            <span>01</span>
            <div></div>
            <span>03</span>
          </div>

          <p className="about-story-intro">
            Atelier was created around a simple idea:
            exceptional spaces deserve a more thoughtful
            way of being discovered.
          </p>

          <p className="about-story-text">
            We look beyond square footage and specifications.
            We look at light, proportion, materials, surroundings
            and the small details that make a residence feel
            unmistakably yours.
          </p>

          <p className="about-story-text">
            From contemporary city homes to private architectural
            residences, our collection is shaped around people
            who value design, individuality and the way a space
            makes them feel.
          </p>

          <button className="about-explore">
            <span>DISCOVER ATELIER</span>
            <strong>↗</strong>
          </button>

        </div>

      </div>


      {/* VALUES */}
      <div className="about-values">

        <div className="about-values-heading">
          <span>OUR APPROACH</span>
          <p>
            Three things guide
            <br />
            everything we do.
          </p>
        </div>


        <div className="about-value">
          <span>01</span>
          <h3>CURATION</h3>
          <p>
            We select spaces for their character,
            not simply their size.
          </p>
        </div>

        <div className="about-value">
          <span>02</span>
          <h3>CONNECTION</h3>
          <p>
            We believe the right home begins
            with the right place.
          </p>
        </div>

        <div className="about-value">
          <span>03</span>
          <h3>EXPERIENCE</h3>
          <p>
            Every detail of the journey should
            feel as considered as the residence.
          </p>
        </div>

      </div>


      {/* BOTTOM STATEMENT */}
      <div className="about-bottom">

        <span>ATELIER / REAL ESTATE</span>

        <h3>
          FIND A PLACE
          <br />
          <em>THAT FEELS LIKE YOU.</em>
        </h3>

      </div>

    </section>
  );
}
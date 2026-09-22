import React, { useState } from "react";
import "./FeaturedProperties.css";

const properties = [
  {
    number: "01",
    type: "PRIVATE RESIDENCE",
    name: "Casa Aurelia",
    location: "Whitefield · Bengaluru",
    price: "₹ 4.8 Cr",
    details: "4 Beds · 5 Baths · 4,280 Sq.Ft",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90",
  },
  {
    number: "02",
    type: "ARCHITECTURAL VILLA",
    name: "Villa Élan",
    location: "Sarjapur · Bengaluru",
    price: "₹ 6.2 Cr",
    details: "5 Beds · 6 Baths · 5,650 Sq.Ft",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=90",
  },
  {
    number: "03",
    type: "SIGNATURE RESIDENCE",
    name: "The Verve",
    location: "Indiranagar · Bengaluru",
    price: "₹ 7.4 Cr",
    details: "4 Beds · 5 Baths · 4,920 Sq.Ft",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=90",
  },
];

export default function FeaturedProperties() {
  const [activeProperty, setActiveProperty] = useState(0);

  return (
    <section className="featured-properties" id="properties">

      {/* INTRO */}
      <div className="featured-intro">

        <div className="featured-intro-top">
          <div className="featured-label">
            <span></span>
            <p>02 / THE COLLECTION</p>
          </div>

          <p className="featured-intro-small">
            A considered selection of residences
            <br />
            defined by architecture and place.
          </p>
        </div>

        <div className="featured-heading-wrap">
          <h2>
            SPACES
            <br />
            <em>WORTH</em>
            <br />
            LIVING IN.
          </h2>

          <div className="featured-intro-side">
            <span>CURATED</span>
            <strong>RESIDENCES</strong>
          </div>
        </div>

      </div>


      {/* PROPERTY SHOWCASE */}
      <div className="featured-showcase">

        {/* IMAGE */}
        <div className="featured-image-wrap">

          {properties.map((property, index) => (
            <div
              key={property.number}
              className={`featured-image ${
                activeProperty === index ? "active" : ""
              }`}
            >
              <img src={property.image} alt={property.name} />

              <div className="featured-image-overlay" />
            </div>
          ))}

          <div className="featured-image-number">
            <span>0{activeProperty + 1}</span>
            <div></div>
            <span>03</span>
          </div>

        </div>


        {/* PROPERTY INFORMATION */}
        <div className="featured-info">

          <div className="featured-info-top">
            <span className="featured-property-type">
              {properties[activeProperty].type}
            </span>

            <span className="featured-property-number">
              {properties[activeProperty].number}
            </span>
          </div>


          <div className="featured-property-main">

            <h3>{properties[activeProperty].name}</h3>

            <p className="featured-location">
              {properties[activeProperty].location}
            </p>

            <div className="featured-line"></div>

            <p className="featured-details">
              {properties[activeProperty].details}
            </p>

          </div>


          <div className="featured-info-bottom">

            <div className="featured-price">
              <span>FROM</span>
              <strong>{properties[activeProperty].price}</strong>
            </div>

            <button className="featured-view">
              <span>VIEW RESIDENCE</span>
              <strong>↗</strong>
            </button>

          </div>

        </div>

      </div>


      {/* PROPERTY NAVIGATION */}
      <div className="featured-navigation">

        <div className="featured-nav-label">
          <span>SELECTED RESIDENCES</span>
        </div>

        <div className="featured-nav-items">

          {properties.map((property, index) => (
            <button
              key={property.number}
              className={
                activeProperty === index ? "active" : ""
              }
              onMouseEnter={() => setActiveProperty(index)}
              onClick={() => setActiveProperty(index)}
            >
              <span>{property.number}</span>
              <strong>{property.name}</strong>
              <small>{property.location}</small>
            </button>
          ))}

        </div>

      </div>


      {/* BOTTOM STATEMENT */}
      <div className="featured-bottom">

        <p>
          Every residence tells a different story.
          <br />
          We help you find the one that feels like yours.
        </p>

        <button>
          <span>EXPLORE ALL PROPERTIES</span>
          <strong>↗</strong>
        </button>

      </div>

    </section>
  );
}
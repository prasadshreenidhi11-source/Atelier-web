import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

const propertyImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90";

const detailImage =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85";

export default function Hero() {
  const heroRef = useRef(null);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToProperties = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="estate-hero" ref={heroRef}>
      {/* BACKGROUND IMAGE */}
      <div
        className="estate-hero-image"
        style={{
          transform: `scale(1.08) translate3d(${mouse.x * -10}px, ${
            mouse.y * -10
          }px, 0)`,
        }}
      >
        <img src={propertyImage} alt="Luxury modern residence" />
      </div>

      {/* DARK CINEMATIC OVERLAY */}
      <div className="estate-overlay" />

      <div className="estate-noise" />

    <header className="estate-nav">

  <a href="#" className="estate-logo">
    <span className="logo-mark">A</span>

    <div className="logo-text">
      <strong>ATELIER</strong>
      <span>REAL ESTATE</span>
    </div>
  </a>

  <nav className="estate-links">
    <a href="#properties">
      <span>01</span>
      Properties
    </a>

    <a href="#collection">
      <span>02</span>
      Collection
    </a>

    <a href="#about">
      <span>03</span>
      About
    </a>
  </nav>

  <div className="estate-nav-right">

    <button className="estate-contact">
      <span>Let's Talk</span>
      <i>↗</i>
    </button>

    <button className="estate-menu">
      <span></span>
      <span></span>
    </button>

  </div>

</header>

      {/* TOP RIGHT LABEL */}
      <div className="hero-location">
        <span className="location-dot"></span>
        <span>BENGALURU · INDIA</span>
      </div>

      {/* MAIN CONTENT */}
      <div className="estate-content">
        <div className="estate-eyebrow">
          <span className="eyebrow-line"></span>
          <span>CURATED LIVING SPACES</span>
        </div>

        <h1 className="estate-title">
          <span>LIVE</span>

          <span className="title-outline">
            BEYOND<span>.</span>
          </span>

          <span>ORDINARY</span>
        </h1>

        <div className="estate-bottom-copy">
          <p>
            Exceptional architecture.
            <br />
            Extraordinary places to call home.
          </p>

          <button
            className="explore-button"
            onClick={scrollToProperties}
          >
            <span>EXPLORE</span>

            <span className="explore-arrow">↓</span>
          </button>
        </div>
      </div>

      {/* FLOATING PROPERTY CARD */}
      <div
        className="property-card"
        style={{
          transform: `translate3d(${mouse.x * 14}px, ${
            mouse.y * 14
          }px, 0)`,
        }}
      >
        <div className="property-card-image">
          <img src={detailImage} alt="Featured luxury residence" />

          <span className="property-status">
            FEATURED
          </span>

          <button className="property-arrow">↗</button>
        </div>

        <div className="property-card-content">
          <div>
            <span className="property-type">
              PRIVATE RESIDENCE
            </span>

            <h3>Casa Aurelia</h3>

            <p>Whitefield · Bengaluru</p>
          </div>

          <div className="property-price">
            <span>FROM</span>
            <strong>₹ 4.8 Cr</strong>
          </div>
        </div>

        <div className="property-meta">
          <div>
            <strong>4</strong>
            <span>BEDS</span>
          </div>

          <div>
            <strong>5</strong>
            <span>BATHS</span>
          </div>

          <div>
            <strong>4,280</strong>
            <span>SQ.FT</span>
          </div>
        </div>
      </div>

      {/* SIDE TEXT */}
      <div className="hero-side-text">
        <span>SCROLL</span>

        <div className="side-line"></div>

        <span>TO DISCOVER</span>
      </div>

      {/* BOTTOM RIGHT INDEX */}
      <div className="hero-index">
        <span>01</span>
        <div className="index-line"></div>
        <span>04</span>
      </div>

      {/* CURSOR GLOW */}
      <div
        className="cursor-glow"
        style={{
          transform: `translate3d(${mouse.x * 25}px, ${
            mouse.y * 25
          }px, 0)`,
        }}
      />
    </section>
  );
}
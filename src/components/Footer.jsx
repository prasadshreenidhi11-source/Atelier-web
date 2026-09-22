
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="atelier-footer">

      <div className="atelier-footer-main">

        {/* BRAND */}
        <div className="atelier-footer-brand">
          <div className="atelier-footer-mark">A</div>

          <div className="atelier-footer-logo">
            <strong>ATELIER</strong>
            <span>REAL ESTATE</span>
          </div>

          <p>
            Thoughtfully selected residences
            <br />
            for a more considered way of living.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="atelier-footer-column">
          <span className="atelier-footer-label">
            NAVIGATION
          </span>

          <nav className="atelier-footer-nav">
            <a href="#properties">Properties</a>
            <a href="#collection">Collection</a>
            <a href="#about">About</a>
            <a href="#journal">Journal</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        {/* CONTACT */}
        <div className="atelier-footer-column">
          <span className="atelier-footer-label">
            CONTACT
          </span>

          <div className="atelier-footer-contact">
            <span>Bengaluru, India</span>
            <a href="mailto:hello@atelierrealestate.com">
              hello@atelierrealestate.com
            </a>
            <a href="tel:+919000000000">
              +91 90000 00000
            </a>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="atelier-footer-column">
          <span className="atelier-footer-label">
            CONNECT
          </span>

          <div className="atelier-footer-social">
            <a href="#" aria-label="Instagram">
              Instagram ↗
            </a>

            <a href="#" aria-label="LinkedIn">
              LinkedIn ↗
            </a>
          </div>
        </div>

      </div>

      {/* LARGE WORDMARK */}
      <div className="atelier-footer-wordmark">
        ATELIER
      </div>

      {/* BOTTOM */}
      <div className="atelier-footer-bottom">
        <span>© 2026 ATELIER REAL ESTATE</span>

        <span>
          BENGALURU · INDIA
        </span>

        <a href="#contact">
          BACK TO TOP ↑
        </a>
      </div>

    </footer>
  );
}


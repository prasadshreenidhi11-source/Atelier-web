
import React, { useEffect, useRef, useState } from "react";
import "./FinalCTA.css";

const backgroundImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=95";

export default function FinalCTA() {
  const sectionRef = useRef(null);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) / rect.width - 0.5) * 2;

      const y =
        ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      setMouse({ x, y });
    };

    const section = sectionRef.current;

    section?.addEventListener("mousemove", handleMouseMove);

    return () => {
      section?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you. Our Atelier team will be in touch shortly.");
  };

  return (
    <section
      className={`final-cta ${formOpen ? "form-is-open" : ""}`}
      id="contact"
      ref={sectionRef}
    >
      {/* BACKGROUND */}
      <div className="final-cta-background">
        <img
          src={backgroundImage}
          alt="Luxury architectural residence"
          style={{
            transform: `
              scale(1.08)
              translate(
                ${mouse.x * -10}px,
                ${mouse.y * -10}px
              )
            `,
          }}
        />

        <div className="final-cta-overlay"></div>
        <div className="final-cta-vignette"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="final-cta-content">

        {/* TOP */}
        <div className="final-cta-top">
          <div className="final-cta-section-number">
            <span>09</span>
            <i></i>
            <strong>FINAL CHAPTER</strong>
          </div>

          <span className="final-cta-top-label">
            ATELIER REAL ESTATE · BENGALURU
          </span>
        </div>

        {/* HEADING */}
        <div className="final-cta-heading">
          <span className="final-cta-intro">
            YOUR NEXT
          </span>

          <h2>
            CHAPTER
            <br />
            <em>STARTS HERE.</em>
          </h2>
        </div>

        {/* CTA */}
        <div className="final-cta-action">
          <p>
            Let's find a place
            <br />
            that feels like yours.
          </p>

          <button
            className="final-cta-button"
            onClick={() => setFormOpen(true)}
          >
            <span>LET'S FIND YOUR PLACE</span>
            <strong>↗</strong>
          </button>
        </div>

        {/* BOTTOM */}
        <div className="final-cta-bottom">
          <span>09 / 09</span>
          <span>BEGIN SOMETHING NEW ↓</span>
          <span>BENGALURU · INDIA</span>
        </div>
      </div>

      {/* FORM OVERLAY */}
      <div className={`final-form-overlay ${formOpen ? "active" : ""}`}>

        <div className="final-form-panel">

          {/* FORM HEADER */}
          <div className="final-form-header">
            <div>
              <span className="final-form-number">
                09 — INQUIRY
              </span>

              <h3>
                LET'S FIND
                <br />
                <em>YOUR PLACE.</em>
              </h3>
            </div>

            <button
              className="final-form-close"
              onClick={() => setFormOpen(false)}
              aria-label="Close inquiry form"
            >
              ×
            </button>
          </div>

          {/* FORM */}
          <form
            className="atelier-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-field">
                <label>01 — FULL NAME</label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-field">
                <label>02 — EMAIL ADDRESS</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-field">
                <label>03 — PHONE NUMBER</label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  required
                />
              </div>

              <div className="form-field">
                <label>04 — LOOKING FOR</label>

                <select required defaultValue="">
                  <option value="" disabled>
                    Select property type
                  </option>

                  <option>Luxury Apartment</option>
                  <option>Villa</option>
                  <option>Independent House</option>
                  <option>Plot</option>
                  <option>Investment Property</option>
                </select>
              </div>

            </div>

            <div className="form-row">

              <div className="form-field">
                <label>05 — PREFERRED LOCATION</label>

                <select required defaultValue="">
                  <option value="" disabled>
                    Select location
                  </option>

                  <option>Whitefield</option>
                  <option>Indiranagar</option>
                  <option>Koramangala</option>
                  <option>Sadashivanagar</option>
                  <option>Sarjapur</option>
                  <option>Other Bengaluru</option>
                </select>
              </div>

              <div className="form-field">
                <label>06 — BUDGET</label>

                <select required defaultValue="">
                  <option value="" disabled>
                    Select budget
                  </option>

                  <option>₹1 Cr — ₹2 Cr</option>
                  <option>₹2 Cr — ₹5 Cr</option>
                  <option>₹5 Cr — ₹10 Cr</option>
                  <option>₹10 Cr+</option>
                </select>
              </div>

            </div>

            <div className="form-field form-message">
              <label>07 — TELL US MORE</label>

              <textarea
                placeholder="Tell us what you're looking for..."
                rows="3"
              ></textarea>
            </div>

            <div className="form-submit-row">

              <p>
                Your information is kept private
                <br />
                and used only to contact you.
              </p>

              <button
                type="submit"
                className="form-submit-button"
              >
                <span>SEND INQUIRY</span>
                <strong>↗</strong>
              </button>

            </div>

          </form>

          <div className="final-form-footer">
            <span>ATELIER REAL ESTATE</span>
            <span>BENGALURU · INDIA</span>
          </div>

        </div>
      </div>

      {/* BACKGROUND NUMBER */}
      <div className="final-cta-number">
        09
      </div>

      <div className="final-cta-line"></div>
    </section>
  );
}


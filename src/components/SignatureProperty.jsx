import React, { useEffect, useRef, useState } from "react";
import "./SignatureProperty.css";

const propertyImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=95";

export default function SignatureProperty() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollDistance =
        sectionRef.current.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      const value = Math.min(
        1,
        Math.max(0, -rect.top / scrollDistance)
      );

      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
    SCROLL TIMELINE

    0.00 → 0.25
    Fullscreen cinematic image

    0.25 → 0.65
    Image gathers / shrinks upward

    0.65 → 1.00
    Property information fully revealed
  */

  const gatherProgress = Math.min(
    1,
    Math.max(0, (progress - 0.2) / 0.5)
  );

  const imageHeight =
    100 - gatherProgress * 43;

  const imageScale =
    1.08 - gatherProgress * 0.08;

  const imageRadius =
    gatherProgress * 4;

  const contentOpacity = Math.min(
    1,
    Math.max(0, (progress - 0.25) / 0.35)
  );

  const contentY =
    80 - contentOpacity * 80;

  const titleOpacity =
    Math.max(0, 1 - gatherProgress * 1.5);

  const titleY =
    -gatherProgress * 80;

  return (
    <section
      className="signature-property"
      id="signature"
      ref={sectionRef}
    >
      <div className="signature-sticky">

        {/* =================================
            IMAGE
        ================================= */}

        <div
          className="signature-image-stage"
          style={{
            height: `${imageHeight}%`,
            borderRadius: `${imageRadius}px`,
          }}
        >
          <img
            src={propertyImage}
            alt="Casa Aurelia luxury residence"
            style={{
              transform: `scale(${imageScale})`,
            }}
          />

          <div className="signature-image-overlay"></div>
          <div className="signature-image-vignette"></div>


          {/* IMAGE TITLE */}

          <div
            className="signature-title"
            style={{
              opacity: titleOpacity,
              transform: `translateY(${titleY}px)`,
            }}
          >
            <div className="signature-label">
              <span>06</span>
              <i></i>
              <strong>SIGNATURE PROPERTY</strong>
            </div>

            <p className="signature-location">
              WHITEFIELD · BENGALURU
            </p>

            <h2>
              CASA
              <br />
              <em>AURELIA</em>
            </h2>

            <div className="signature-title-line"></div>

            <p className="signature-description">
              Where modern architecture
              <br />
              meets a more considered way
              <br />
              of living.
            </p>
          </div>


          {/* SCROLL INDICATOR */}

          <div className="signature-scroll-indicator">
            <span>SCROLL</span>

            <div className="signature-scroll-track">
              <div
                style={{
                  height: `${Math.max(
                    15,
                    progress * 100
                  )}%`,
                }}
              />
            </div>
          </div>

        </div>


        {/* =================================
            PROPERTY INFORMATION
        ================================= */}

        <div
          className="signature-information"
          style={{
            opacity: contentOpacity,
            transform: `translateY(${contentY}px)`,
          }}
        >

          {/* INFO HEADER */}

          <div className="signature-info-heading">

            <div>
              <span>CASA AURELIA</span>
              <p>
                WHITEFIELD · BENGALURU
              </p>
            </div>

            <span className="signature-info-number">
              01 / 04
            </span>

          </div>


          {/* DETAILS */}

          <div className="signature-details">

            <div className="signature-detail">
              <span className="detail-icon">⌂</span>

              <small>BUILT-UP AREA</small>

              <strong>
                6,800 SQ FT
              </strong>
            </div>


            <div className="signature-detail">
              <span className="detail-icon">□</span>

              <small>BEDROOMS</small>

              <strong>
                05
              </strong>
            </div>


            <div className="signature-detail">
              <span className="detail-icon">◇</span>

              <small>BATHROOMS</small>

              <strong>
                05
              </strong>
            </div>


            <div className="signature-detail">
              <span className="detail-icon">▱</span>

              <small>PARKING</small>

              <strong>
                04 CARS
              </strong>
            </div>

          </div>


          {/* BOTTOM */}

          <div className="signature-info-bottom">

            <p>
              A residence shaped around
              <br />
              light, landscape and modern living.
            </p>

            <button className="signature-view-button">
              <span>VIEW RESIDENCE</span>
              <strong>↗</strong>
            </button>

          </div>

        </div>


        {/* BACKGROUND NUMBER */}

        <div className="signature-bg-number">
          06
        </div>

      </div>
    </section>
  );
}
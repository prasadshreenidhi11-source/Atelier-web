import React, { useEffect, useRef, useState } from "react";
import "./InteriorSection.css";

const exteriorImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90";

const livingImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90";

const bedroomImage =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=90";

const balconyImage =
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=90";

export default function InteriorSection() {
  const sectionRef = useRef(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const sectionHeight =
        sectionRef.current.offsetHeight - window.innerHeight;

      if (sectionHeight <= 0) return;

      const currentProgress = Math.min(
        1,
        Math.max(0, -rect.top / sectionHeight)
      );

      setProgress(currentProgress);
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
  =========================================================
  SCROLL TIMELINE

  0.00 - 0.22  EXTERIOR
  0.22 - 0.45  LIVING HALL
  0.45 - 0.68  BEDROOM
  0.68 - 1.00  BALCONY
  =========================================================
  */

  /* -------------------------------------------------------
     EXTERIOR
  ------------------------------------------------------- */

  const exteriorProgress = Math.min(
    1,
    progress / 0.22
  );

  const exteriorScale =
    1.04 + exteriorProgress * 0.22;

  const exteriorOpacity =
    progress < 0.17
      ? 1
      : Math.max(
          0,
          1 - (progress - 0.17) / 0.08
        );

  /* -------------------------------------------------------
     LIVING
  ------------------------------------------------------- */

  const livingProgress = Math.min(
    1,
    Math.max(0, (progress - 0.16) / 0.25)
  );

  const livingOpacity =
    progress < 0.17
      ? 0
      : progress < 0.25
      ? (progress - 0.17) / 0.08
      : progress < 0.39
      ? 1
      : Math.max(
          0,
          1 - (progress - 0.39) / 0.08
        );

  const livingScale =
    1.12 - livingProgress * 0.12;

  const livingX =
    livingProgress * -2;

  /* -------------------------------------------------------
     BEDROOM
  ------------------------------------------------------- */

  const bedroomProgress = Math.min(
    1,
    Math.max(0, (progress - 0.39) / 0.25)
  );

  const bedroomOpacity =
    progress < 0.40
      ? 0
      : progress < 0.48
      ? (progress - 0.40) / 0.08
      : progress < 0.62
      ? 1
      : Math.max(
          0,
          1 - (progress - 0.62) / 0.08
        );

  const bedroomScale =
    1.14 - bedroomProgress * 0.14;

  const bedroomX =
    2 - bedroomProgress * 4;

  /* -------------------------------------------------------
     BALCONY
  ------------------------------------------------------- */

  const balconyProgress = Math.min(
    1,
    Math.max(0, (progress - 0.62) / 0.38)
  );

  const balconyOpacity =
    progress < 0.63
      ? 0
      : progress < 0.72
      ? (progress - 0.63) / 0.09
      : 1;

  const balconyScale =
    1.15 - balconyProgress * 0.15;

  const balconyY =
    20 - balconyProgress * 20;

  /* -------------------------------------------------------
     ROOM TEXT
  ------------------------------------------------------- */

  const getRoom = () => {
    if (progress < 0.22) {
      return {
        number: "01",
        label: "THE ARRIVAL",
        title: "A HOME",
        emphasis: "BEGINS",
        final: "OUTSIDE.",
        description:
          "Architecture shaped around light, landscape and the way you live.",
      };
    }

    if (progress < 0.45) {
      return {
        number: "02",
        label: "THE GATHERING",
        title: "SPACE",
        emphasis: "TO",
        final: "LIVE.",
        description:
          "Open living spaces designed for slow mornings and unforgettable evenings.",
      };
    }

    if (progress < 0.68) {
      return {
        number: "03",
        label: "THE RETREAT",
        title: "A QUIET",
        emphasis: "PLACE",
        final: "TO REST.",
        description:
          "Private interiors where natural textures and soft light create calm.",
      };
    }

    return {
      number: "04",
      label: "THE OPEN AIR",
      title: "LIFE",
      emphasis: "BEYOND",
      final: "THE WALLS.",
      description:
        "Step outside and let the city, sky and landscape become part of home.",
    };
  };

  const room = getRoom();

  /* -------------------------------------------------------
     TEXT TRANSITION
  ------------------------------------------------------- */

  const roomTextOpacity =
    progress < 0.04
      ? progress / 0.04
      : 1;

  /* -------------------------------------------------------
     PROGRESS
  ------------------------------------------------------- */

  const stageNumber =
    progress < 0.22
      ? "01"
      : progress < 0.45
      ? "02"
      : progress < 0.68
      ? "03"
      : "04";

  return (
    <section
      className="interior-scroll-section"
      ref={sectionRef}
    >
      <div className="interior-sticky">

        {/* =================================================
            CINEMATIC SCENE
        ================================================= */}

        <div className="interior-scene">

          {/* EXTERIOR */}

          <div
            className="scene-layer exterior-layer"
            style={{
              opacity: exteriorOpacity,
              transform: `
                scale(${exteriorScale})
                translate3d(0, 0, 0)
              `,
            }}
          >
            <img
              src={exteriorImage}
              alt="Luxury residence exterior"
            />
          </div>

          {/* LIVING ROOM */}

          <div
            className="scene-layer living-layer"
            style={{
              opacity: livingOpacity,
              transform: `
                translate3d(${livingX}%, 0, 0)
                scale(${livingScale})
              `,
            }}
          >
            <img
              src={livingImage}
              alt="Luxury living hall"
            />
          </div>

          {/* BEDROOM */}

          <div
            className="scene-layer bedroom-layer"
            style={{
              opacity: bedroomOpacity,
              transform: `
                translate3d(${bedroomX}%, 0, 0)
                scale(${bedroomScale})
              `,
            }}
          >
            <img
              src={bedroomImage}
              alt="Luxury bedroom"
            />
          </div>

          {/* BALCONY */}

          <div
            className="scene-layer balcony-layer"
            style={{
              opacity: balconyOpacity,
              transform: `
                translate3d(0, ${balconyY}px, 0)
                scale(${balconyScale})
              `,
            }}
          >
            <img
              src={balconyImage}
              alt="Luxury balcony"
            />
          </div>

          {/* DARK CINEMATIC OVERLAYS */}

          <div className="scene-vignette" />

          <div className="scene-gradient" />

          <div className="scene-noise" />

        </div>

        {/* =================================================
            ROOM CONTENT
        ================================================= */}

        <div
          className="room-content"
          style={{
            opacity: roomTextOpacity,
          }}
        >
          <div className="room-eyebrow">
            <span className="room-line"></span>

            <p>
              {room.number} / {room.label}
            </p>
          </div>

          <h2>
            {room.title}
            <br />

            <em>{room.emphasis}</em>
            <br />

            {room.final}
          </h2>

          <p className="room-description">
            {room.description}
          </p>
        </div>

        {/* =================================================
            ROOM LABEL
        ================================================= */}

        <div className="room-counter">

          <span className="counter-current">
            {stageNumber}
          </span>

          <div className="counter-line">
            <div
              style={{
                transform: `scaleX(${progress})`,
              }}
            />
          </div>

          <span>04</span>

        </div>

        {/* =================================================
            PROPERTY DETAILS
        ================================================= */}

        <div className="property-details">

          <div>
            <strong>4,280</strong>
            <span>SQ.FT</span>
          </div>

          <div>
            <strong>04</strong>
            <span>BEDROOMS</span>
          </div>

          <div>
            <strong>05</strong>
            <span>BATHROOMS</span>
          </div>

        </div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <div className="scene-scroll">

          <span>
            {progress > 0.82
              ? "THE RESIDENCE"
              : "SCROLL TO EXPLORE"}
          </span>

          <div className="scroll-circle">
            <span>↓</span>
          </div>

        </div>

      </div>
    </section>
  );
}
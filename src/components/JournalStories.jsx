import React, { useState } from "react";
import "./JournalStories.css";

const stories = [
  {
    number: "01",
    category: "ARCHITECTURE",
    title: "The new language of Bengaluru residences",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "02",
    category: "LIFESTYLE",
    title: "What makes a house feel like home?",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "03",
    category: "DESIGN",
    title: "Inside the details that define exceptional spaces",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=90",
  },
];

export default function JournalStories() {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <section className="journal-section" id="journal">

      {/* Background */}
      <div className="journal-background">
        {stories.map((story, index) => (
          <img
            key={story.number}
            src={story.image}
            alt={story.title}
            className={`journal-bg-image ${
              activeStory === index ? "active" : ""
            }`}
          />
        ))}

        <div className="journal-bg-overlay"></div>
      </div>

      <div className="journal-content">

        {/* Top */}
        <div className="journal-top">

          <div className="journal-section-number">
            <span>08</span>
            <i></i>
            <strong>JOURNAL / STORIES</strong>
          </div>

          <span className="journal-top-label">
            THOUGHTS · SPACES · LIVING
          </span>

        </div>


        {/* Heading */}
        <div className="journal-heading">

          <span>THE ATELIER</span>

          <h2>
            STORIES
            <br />
            <em>WORTH LIVING.</em>
          </h2>

        </div>


        {/* Stories */}
        <div className="journal-list">

          {stories.map((story, index) => (

            <article
              key={story.number}
              className={`journal-card ${
                activeStory === index ? "active" : ""
              }`}
              onMouseEnter={() => setActiveStory(index)}
              onFocus={() => setActiveStory(index)}
              tabIndex="0"
            >

              {/* Number */}
              <div className="journal-number">
                {story.number}
              </div>


              {/* Image */}
              <div className="journal-image">

                <img
                  src={story.image}
                  alt={story.title}
                />

                <div className="journal-image-overlay"></div>

              </div>


              {/* Content */}
              <div className="journal-card-content">

                <span className="journal-category">
                  {story.category}
                </span>

                <h3>
                  {story.title}
                </h3>

              </div>


              {/* Arrow */}
              <div className="journal-arrow">
                ↗
              </div>

            </article>

          ))}

        </div>


        {/* Bottom */}
        <div className="journal-bottom">

          <span>
            03 EDITORIAL STORIES
          </span>

          <span>
            EXPLORE THE JOURNAL ↓
          </span>

        </div>

      </div>


      {/* Background Number */}
      <div className="journal-bg-number">
        08
      </div>

    </section>
  );
}
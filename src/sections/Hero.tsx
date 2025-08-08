import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero" aria-label="Hero">
      <div className="container hero-inner">
        <h1>Hawaiian Heirloom Jewelry, Crafted with Aloha</h1>
        <div className="rule" />
        <p>
            The word Malama derives from the Hawaiian language
          with the meaning of “to care for” or “to take care of”. It
          holds meaning to one’s stewardship with compassion.
          Malama Heirloom specializes in a one-of-a-kind,
          custom hand engraved Hawaiian jewelry to capture the
          significant event in your life.
        </p>
        <div style={{ marginTop: "1.25rem" }}>
          <a className="btn" href="#about">Learn our story</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

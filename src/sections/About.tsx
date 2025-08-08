import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="kicker"></p>

        <div className="about-wrap">
          <div className="left-accent">
            <h2>Humble Begginings</h2>
            <div className="rule" />
            <p>
              Malama Heirloom, established in October 2017 is a wholesaler
              based in Downtown Los Angeles, CA that specializes in custom
              hand-made, one-of-a-kind jewelry inspired by traditional Hawaiian
              Heirloom. The owner and designer originated from Honolulu, HI,
              seek to expand his business beyond the islands and beyond
              wholesale. His company mission is to share his passion and
              personal take on Hawaiian jewelry with story telling pieces.
            </p>

            <div className="rule" />

            <p>
              John Nguyen is the master carver behind Malama Heirloom. His
              journey began in 1989 when he started his apprenticeship as a
              part timer for a local Hawaiian jewelry manufacturer. During the
              first three months, he focused on raised letters and letter
              cutting. John quickly developed a talent for hand carving and
              engraving. He fell in love with designing and the creating
              process and has made many one-of-a-kind pieces through the years.
              His work and techniques have evolved over time as he continues to
              be inspired to create storytelling pieces.
            </p>
            <a className="btn" href="#contact">Request a custom quote</a>
          </div>

          <div className="about">
            <img
              src="https://via.placeholder.com/600x420?text=Jewelry+Photo"
              alt="Placeholder jewelry photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div style={{ marginBottom: ".5rem", fontWeight: 700 }}>
          Malama Heirloom
        </div>
        <div>Honolulu, HI • By appointment only</div>
        <div>Email: <a href="mailto:aloha@malamaheirloom.com">aloha@malamaheirloom.com</a></div>
        <div style={{ marginTop: ".75rem", fontSize: ".9rem" }}>
          © {new Date().getFullYear()} Malama Heirloom. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

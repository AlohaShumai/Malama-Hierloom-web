import React from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default App;

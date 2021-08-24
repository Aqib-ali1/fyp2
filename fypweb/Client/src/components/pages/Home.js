import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Parcing from "./Parcing";
import Navbar from '../Navbar';


function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cards />
      <Parcing /> <br /> <br />
      <Footer />
    </div>
  );
}

export default Home;

import React from "react";
import Hero from "./hero";
import NavBar from "./navbar";
import Footer from "./footer";
import OurMission from "./our-mission";
import OurTools from "./our-tools";
import OurProducts from "./our-products";
import Success from "./success";
import FAQ from "./faq";
import CTA from "./cta";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <OurMission />
      <OurTools />
      <OurProducts />
      <Success />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default HomePage;

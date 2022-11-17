import React from "react";
import About from "../Home/About";
import Cores from "../Home/Cores";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Home from "../Home/Home";
import Nossos from "../Home/Nossos";
import Seguros from "../Common/Seguros";
import Shop from "../Home/Shop";

function HomeP(props) {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Shop />
        <Cores />
        <Nossos />
        <About />
        <Seguros />
      </main>
      <Footer />
    </>
  );
}

export default HomeP;

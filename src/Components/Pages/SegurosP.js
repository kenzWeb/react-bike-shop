import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer"
import Accordion from "../Seguros/Accordion";
import Seguros from "../Seguros/Seguros";
import Vanta from "../Seguros/Vanta";

function SegurosP() {
  return (
    <>
      <Header />
      <main>
        <Seguros />
        <Vanta />
        <Accordion />
      </main>
			<Footer/>
    </>
  );
}

export default SegurosP;

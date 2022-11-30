import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Condicoes from "../Condicoes/Condicoes";
import About from "../Condicoes/Condicoes";
import Termos from "../Condicoes/Termos";

function CondiçõesP() {
  return (
    <>
      <Header />

      <main>
        <Termos />
        <Condicoes />
      </main>

      <Footer />
    </>
  );
}

export default CondiçõesP;

import React, { useState } from "react";
import Header from "../Common/Header";
import Nossas from "../Bicicletas/Nossas";
import NossasShop from "../Bicicletas/NossasShop";
import Footer from "../Common/Footer";

function BicicletasP() {
  return (
    <>
      <Header/>
			<main>
				<Nossas/>
				<NossasShop/>
			</main>
			<Footer/>
    </>
  );
}

export default BicicletasP;

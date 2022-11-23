import React from "react";
import Footer from "../Common/Footer";
import Header from '../Common/Header'
import Contato from "../Contato/Contato";
import ContatoCard from "../Contato/ContatoCard";
import Locals from "../Contato/Locals";

function ContatoP() {
	return (
		<>
			<Header/>

			<main>
				<Contato/>
				<ContatoCard/>
				<Locals/>
			</main>

			<Footer/>
		</>
	)
}

export default ContatoP;

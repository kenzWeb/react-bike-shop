import BicicletasP from "./Pages/BicicletasP";
import ContatoP from "./Pages/ContatoP";
import HomeP from "./Pages/HomeP";
import SegurosP from "./Pages/SegurosP";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <>
      <div className={`App`}></div>
      <Routes>
        <Route path="/" element={<HomeP />} />
        <Route path="/bicicletas" element={<BicicletasP />} />
        <Route path="/seguros" element={<SegurosP />} />
        <Route path="/contato" element={<ContatoP />} />
      </Routes>
    </>
  );
}

export default App;

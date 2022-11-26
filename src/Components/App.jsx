import BicicletasP from "./Pages/BicicletasP";
import ContatoP from "./Pages/ContatoP";
import HomeP from "./Pages/HomeP";
import SegurosP from "./Pages/SegurosP";
import CondiçõesP from "./Pages/CondiçõesP";

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
        <Route path="/condicoes" element={<CondiçõesP />} />
      </Routes>
    </>
  );
}

export default App;

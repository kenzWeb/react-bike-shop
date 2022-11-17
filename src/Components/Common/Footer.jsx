import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column-first">
          <h2 className="header-logo">bickraft</h2>
        </div>
        <div className="footer__column-second">
          <h2 className="footer__second-title">Contato</h2>
          <div className="footer__second-content">
            <p className="footer__second-link">
              +55 22 99999-9999 contato@bikcraft.com
            </p>
            <p className="footer__second-link">
              Rua Ali Perto, 42 - Botafogo Rio de Janeiro - RJ
            </p>
          </div>
          <div className="footer__second-socials">
            <a href="http://localhost:3000/">
              <img src="img/footer/instagram.svg" alt="" />
            </a>
            <a href="http://localhost:3000/">
              <img src="img/footer/facebook.svg" alt="" />
            </a>
            <a href="http://localhost:3000/">
              <img src="img/footer/youtube.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="footer__column-third">
          <h2 className="footer__third-title">INFORMAÇÕES</h2>
          <div className="footer__third-links">
            <a className="footer__third-link" href="http://localhost:3000/">
              Bicicletas
            </a>
            <a className="footer__third-link" href="http://localhost:3000/">
              Seguros
            </a>
            <a className="footer__third-link" href="http://localhost:3000/">
              Contato
            </a>
            <a className="footer__third-link" href="http://localhost:3000/">
              Termos e Condições
            </a>
          </div>
        </div>
      </div>
      <h2 className="footer__license">
        Bikcraft © Alguns rireitos reservados.
      </h2>
    </footer>
  );
}

export default Footer;

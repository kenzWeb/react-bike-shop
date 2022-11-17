import React from "react";
import { useMatch, useResolvedPath } from "react-router-dom";
import SegurosP from "../Pages/SegurosP";

function Seguros() {
  return (
    <section className="seguros">
      <div className="seguros__container">
        <div className="seguros__header">
          <h2 className="seguros__header-title title">
            seguros<span>.</span>
          </h2>
        </div>
        <div className="seguros__content">
          <div className="seguros__left">
            <div className="seguros__left-card">
              <div className="seguros__left-header">
                <h2 className="seguros__left-title">PRATA</h2>
                <p className="seguros__left-price">R$ 199</p>
              </div>
              <div className="seguros__left-content">
                <p className="seguros__left-link seguros__link">
                  Duas trocas por ano
                </p>
                <p className="seguros__left-link seguros__link">
                  Assistência técnica
                </p>
                <p className="seguros__left-link seguros__link">
                  Suporte 08h às 18h
                </p>
                <p className="seguros__left-link seguros__link">
                  Cobertura estatual
                </p>
                <button className="seguros__left-button seguros__button">
                  INSCREVA-SE
                </button>
              </div>
            </div>
          </div>
          <div className="seguros__right">
            <div className="seguros__right-card">
              <div className="seguros__right-header">
                <h2 className="seguros__right-title">OURO</h2>
                <p className="seguros__right-price">R$ 199</p>
              </div>
              <div className="seguros__right-content">
                <p className="seguros__right-link seguros__link">
                  Cinco trocas por ano
                </p>
                <p className="seguros__right-link seguros__link">
                  Assistência técnica
                </p>
                <p className="seguros__right-link seguros__link">Suporte 24h</p>
                <p className="seguros__right-link seguros__link">
                  Cobertura nacional
                </p>
                <p className="seguros__right-link seguros__link">
                  Cobertura estatual
                </p>
                <p className="seguros__right-link seguros__link">
                  Descontos em parceiros
                </p>
                <p className="seguros__right-link seguros__link">
                  Acesso ao Clube Bikecraft
                </p>
                <button className="seguros__right-button seguros__button">
                  INSCREVA-SE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Seguros;

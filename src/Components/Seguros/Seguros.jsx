import React from "react";
import { useMatch, useResolvedPath } from "react-router-dom";
import SegurosP from "../Pages/SegurosP";
import { motion } from "framer-motion";

const CardAnimation = {
  to: (c) => ({
    opacity: 0,
    x: 1000
  }),
  from: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

function Seguros() {
  return (
    <motion.section
      className="seguros"
      initial="to"
      whileInView="from"
      viewport={{ amount: 0.2, once: true }}
			style={{overflow: 'hidden'}}
    >
      <div className="seguros__container">
        <div className="seguros__header">
          <p className="subtitle">ESCOLHA O SEGURO</p>
          <h2 className="seguros__header-title title">
            você seguro<span>.</span>
          </h2>
        </div>
        <div className="seguros__content">
          <div className="seguros__left">
            <motion.div
              className="seguros__left-card"
              variants={CardAnimation}
              custom={1}
							c={1000}
            >
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
            </motion.div>
          </div>
          <div className="seguros__right">
            <motion.div
              className="seguros__right-card"
              variants={CardAnimation}
							custom={2}
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Seguros;

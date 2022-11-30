import React from "react";
import { motion } from "framer-motion";

function NossasShop() {
  return (
    <div className="nossasShop__container">
      <motion.div className="nossas__content">
        <motion.div
          className="nossas__card"
          viewport={{ amount: 0.2, once: true }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6,}}
        >
          <div className="nossas__card-img">
            <img src="img/nossas/card1.jpg" alt="" />
            <h2 className="nossas__card-img_price">R$ 4.999</h2>
          </div>
          <div className="nossas__card-info">
            <img
              className="nossas__deco"
              src="img/nossas/decoration/decoEl.svg"
              alt=""
            />
            <h2 className="nossas__card-title">Nimbus Stark</h2>
            <p className="nossas__card-subtitle">
              A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe.
              Ela vem equipada com os melhores acessórios, o que garante maior
              velocidade.{" "}
            </p>
            <div className="nossas__card-character">
              <div className="nossas__character-wrapper">
                <div className="nossas__character-container">
                  <img
                    className="nossas__character-img"
                    src="img/nossas/decoration/item1.svg"
                    alt=""
                  />
                  <h2 className="nossas__character-title">Motor Elétrico</h2>
                </div>
                <div className="nossas__character-container">
                  <img
                    className="nossas__character-img"
                    src="img/nossas/decoration/item2.svg"
                    alt=""
                  />
                  <h2 className="nossas__character-title">Fibra de Carbono</h2>
                </div>
                <div className="nossas__character-container">
                  <img
                    className="nossas__character-img"
                    src="img/nossas/decoration/item3.svg"
                    alt=""
                  />
                  <h2 className="nossas__character-title">40km/h</h2>
                </div>
                <div className="nossas__character-container">
                  <img
                    className="nossas__character-img"
                    src="img/nossas/decoration/item4.svg"
                    alt=""
                  />
                  <h2 className="nossas__character-title">Rastreador</h2>
                </div>
              </div>
              <div className="nossas__button-wrapper">
                <a
                  className="nossas__button-link"
                  href="http://localhost:3000/"
                >
                  MAIS SOBRE
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="nossas__card nossas__card-bg"
          viewport={{ amount: 0.2, once: true }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="nossas__card-img">
            <img src="img/nossas/card2.jpg" alt="" />
            <h2 className="nossas__card-img_price">R$ 2.499</h2>
          </div>
          <div className="nossas__card-info">
            <img
              className="nossas__deco"
              src="img/nossas/decoration/decoEl.svg"
              alt=""
            />
            <h2 className="nossas__card-title">Magic Migth</h2>
            <p className="nossas__card-subtitle">
              A Magic Migth é a melhor Bikcraft já criada pela nossa equipe. Ela
              vem equipada com os melhores acessórios, o que garante maior
              velocidade.
            </p>
            <div className="nossas__card-character">
              <div className="nossas__character-wrapper">
                <div className="nossas__character-container">
                  <img
                    className="nossas__character-img"
                    src="img/nossas/decoration/item1.svg"
                    alt=""
                  />
                  <h2 className="nossas__character-title">Motor Elétrico</h2>
                </div>
                <div className="nossas__character-container">
                  <img
                    className="nossas__character-img"
                    src="img/nossas/decoration/item2.svg"
                    alt=""
                  />
                  <h2 className="nossas__character-title">Fibra de Carbono</h2>
                </div>
                <div className="nossas__character-container">
                  <img
                    className="nossas__character-img"
                    src="img/nossas/decoration/item3.svg"
                    alt=""
                  />
                  <h2 className="nossas__character-title">40km/h</h2>
                </div>
                <div className="nossas__character-container">
                  <img
                    className="nossas__character-img"
                    src="img/nossas/decoration/item4.svg"
                    alt=""
                  />
                  <h2 className="nossas__character-title">Rastreador</h2>
                </div>
              </div>
              <div className="nossas__button-wrapper">
                <a
                  className="nossas__button-link"
                  href="http://localhost:3000/"
                >
                  MAIS SOBRE
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="nossas__card"
          viewport={{ amount: 0.2, once: true }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="nossas__card-img">
            <img src="img/nossas/card3.jpg" alt="" />
            <h2 className="nossas__card-img_price">R$ 3.999</h2>
          </div>
          <div className="nossas__card-info">
            <img
              className="nossas__deco"
              src="img/nossas/decoration/decoEl.svg"
              alt=""
            />
            <h2 className="nossas__card-title">Mebula Cosmic</h2>
            <p className="nossas__card-subtitle">
              A Mebula Cosmic é a melhor Bikcraft já criada pela nossa equipe.
              Ela vem equipada com os melhores acessórios, o que garante maior
              velocidade.
            </p>
            <div className="nossas__card-character">
              <div className="nossas__character-wrapper">
                <div className="nossas__character-container">
                  <img
                    className="nossas__character-img"
                    src="img/nossas/decoration/item1.svg"
                    alt=""
                  />
                  <h2 className="nossas__character-title">Motor Elétrico</h2>
                </div>
                <div className="nossas__character-container">
                  <img
                    className="nossas__character-img"
                    src="img/nossas/decoration/item2.svg"
                    alt=""
                  />
                  <h2 className="nossas__character-title">Fibra de Carbono</h2>
                </div>
                <div className="nossas__character-container">
                  <img
                    className="nossas__character-img"
                    src="img/nossas/decoration/item3.svg"
                    alt=""
                  />
                  <h2 className="nossas__character-title">40km/h</h2>
                </div>
                <div className="nossas__character-container">
                  <img
                    className="nossas__character-img"
                    src="img/nossas/decoration/item4.svg"
                    alt=""
                  />
                  <h2 className="nossas__character-title">Rastreador</h2>
                </div>
              </div>
              <div className="nossas__button-wrapper">
                <a
                  className="nossas__button-link"
                  href="http://localhost:3000/bicicletas"
                >
                  MAIS SOBRE
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default NossasShop;

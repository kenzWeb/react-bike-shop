import React from "react";
import { motion } from "framer-motion";

const CardAnimation = {
  to: {
    opacity: 0,
    x: -1000,
  },
  from: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

function Nossos() {
  return (
    <motion.section
      className="nossos"
      initial="to"
      whileInView="from"
      viewport={{ amount: 0.1, once: true }}
			style={{overflow: 'hiden'}}
    >
      <div className="nosso__container">
        <div className="nossos__head">
          <h2 className="title">
            Nossos parceiros<span>.</span>
          </h2>
        </div>
        <div className="nossos__items">
          <motion.div
            className="nossos__first"
            variants={CardAnimation}
            custom={1}
          >
            <div className="nossos__content">
              <img src="img/nossos/ranek.svg" alt="" className="nossos__img" />
            </div>
            <div className="nossos__content">
              <img
                src="img/nossos/caravan.svg"
                alt=""
                className="nossos__img"
              />
            </div>
            <div className="nossos__content">
              <img src="img/nossos/dogs.svg" alt="" className="nossos__img" />
            </div>
            <div className="nossos__content">
              <img src="img/nossos/handel.svg" alt="" className="nossos__img" />
            </div>
          </motion.div>
          <motion.div
            className="nossos__second"
            variants={CardAnimation}
            custom={3}
          >
            <div className="nossos__content">
              <img
                src="img/nossos/surfbot.svg"
                alt=""
                className="nossos__img"
              />
            </div>
            <div className="nossos__content">
              <img
                src="img/nossos/wildbeast.svg"
                alt=""
                className="nossos__img"
              />
            </div>
            <div className="nossos__content">
              <img
                src="img/nossos/flexblog.svg"
                alt=""
                className="nossos__img"
              />
            </div>
            <div className="nossos__content">
              <img
                src="img/nossos/lescone.svg"
                alt=""
                className="nossos__img"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Nossos;

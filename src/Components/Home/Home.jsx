import React from "react";
import { motion } from "framer-motion";

export default function Home(props) {
  return (
    <section className="escolh">
      <div className="escolh__container">
        <div className="escolh__left">
          <motion.h2
            className="escolh__title"
            initial={{
              x: -1000,
            }}
            animate={{
              x: 0,
              transition: { duration: 0.6 },
            }}
          >
            bicicletas feitas sob medida<span>.</span>
          </motion.h2>
          <motion.p
            className="escolh__subtitle"
            initial={{
              x: -1000,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
          >
            Bicicletas elétricas de alta precisão e qualidade, feitas sob medida
            para o cliente. Explore o mundo na sua velocidade com a Bikcraft.
          </motion.p>
          <motion.button
            className="escolh__button"
            initial={{
              x: -1000,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.7,
            }}
          >
            Selecione a sua
          </motion.button>
        </div>
        <div className="escolh__right">
          <motion.img
            className="escolh__img"
            src="img/escolh/img-intro.jpg"
            alt=""
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}

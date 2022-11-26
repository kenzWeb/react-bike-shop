import React from "react";
import { motion } from "framer-motion";

const CardAnimation = {
  to: {
    opacity: 0,
    x: 2000,
  },
  from: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

function About() {
  return (
    <motion.section
      className="about"
      viewport={{ amount: 0.1, once: true }}
      initial="to"
      whileInView="from"
      style={{overflow: 'hidden'}}
    >
      <motion.img
        className="about__left"
        src="img/about/about-left.jpg"
        alt=""
        variants={CardAnimation}
        custom={1}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
      <motion.div
        className="about__right"
        variants={CardAnimation}
        custom={3}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <h2 className="about__title">
          Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez foi
          intensificar o meu amor por esta atividade. Recomendo à todos que amo.
        </h2>
        <p className="about__subtitle">Ana Júlia</p>
      </motion.div>
    </motion.section>
  );
}

export default About;

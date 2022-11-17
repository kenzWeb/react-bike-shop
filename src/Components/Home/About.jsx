import React from "react";

function About() {
  return (
    <section className="about">
      <img className="about__left" src="/img/about/about-left.jpg" alt="" />
      <div className="about__right">
        <h2 className="about__title">
          Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez foi
          intensificar o meu amor por esta atividade. Recomendo à todos que amo.
        </h2>
        <p className="about__subtitle">Ana Júlia</p>
      </div>
    </section>
  );
}

export default About;

import React from "react";

export default function Home(props) {
  return (
    <section className="escolh">
      <div className="escolh__container">
        <div className="escolh__left">
          <h2 className="escolh__title">
            bicicletas feitas sob medida<span>.</span>
          </h2>
          <p className="escolh__subtitle">
            Bicicletas elétricas de alta precisão e qualidade, feitas sob medida
            para o cliente. Explore o mundo na sua velocidade com a Bikcraft.
          </p>
          <button className="escolh__button">Selecione a sua</button>
        </div>
        <div className="escolh__right">
					<img className="escolh__img" src='img/escolh/img-intro.jpg' alt="" />
        </div>
      </div>
    </section>
  );
}

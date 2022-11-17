import React from "react";

function Cores() {
  return (
    <section className="cores">
      <div className="cores__container">
        <div className="cores__left">
          <div className="cores__left-basic">
            <h2 className="cores__basic-header">Tecnologia avançada</h2>
            <h3 className="cores__basic-title">
              Você escolhe as suas cores e componentes<span>.</span>
            </h3>
            <p className="cores__basic-subtitle">
              Cada Bikcraft é única e possui a sua identidade. As medidas serão
              exatas para o seu corpo e altura, garantindo maior conforto e
              ergonomia na sua pedalada. Você pode também personalizar
              completamente as suas cores.
            </p>
            <button className="cores__basic-button">ESCOLHA UM MODELO</button>
          </div>
          <div className="cores__left-content">
            <div className="cores__left-cart">
              <img
                src="img/cores/item1.svg"
                alt=""
                className="cores__cart-img"
              />
              <h2 className="cores__cart-title">Motor Elétrico</h2>
              <p className="cores__cart-subtitle">
                Toda Bikcraft é equipada com um motor elétrico que possui
                duração de até 120h. A bateria é recarregada com a sua energia
                gasta ao pedalar.
              </p>
            </div>
            <div className="cores__left-cart">
              <img
                src="img/cores/item2.svg"
                alt=""
                className="cores__cart-img"
              />
              <h2 className="cores__cart-title">Rastreador</h2>
              <p className="cores__cart-subtitle">
                Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos
                rastreadores e sistemas anti-furto para garantir o seu sossego.
              </p>
            </div>
          </div>
        </div>
        <div className="cores__right">
          <img
            className="cores__right-img"
            src="/img/cores/cores-right.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Cores;

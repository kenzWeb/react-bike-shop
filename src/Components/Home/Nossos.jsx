import React from "react";

function Nossos() {
  return (
    <section className="nossos">
      <div className="nosso__container">
        <div className="nossos__head">
          <h2 className="title">
            Nossos parceiros<span>.</span>
          </h2>
        </div>
        <div className="nossos__items">
          <div className="nossos__first">
            <div className="nossos__content">
              <img src="/img/nossos/ranek.svg" alt="" className="nossos__img" />
            </div>
            <div className="nossos__content">
              <img
                src="/img/nossos/caravan.svg"
                alt=""
                className="nossos__img"
              />
            </div>
            <div className="nossos__content">
              <img src="/img/nossos/dogs.svg" alt="" className="nossos__img" />
            </div>
            <div className="nossos__content">
              <img
                src="/img/nossos/handel.svg"
                alt=""
                className="nossos__img"
              />
            </div>
          </div>
          <div className="nossos__second">
            <div className="nossos__content">
              <img
                src="/img/nossos/surfbot.svg"
                alt=""
                className="nossos__img"
              />
            </div>
            <div className="nossos__content">
              <img
                src="/img/nossos/wildbeast.svg"
                alt=""
                className="nossos__img"
              />
            </div>
            <div className="nossos__content">
              <img
                src="/img/nossos/flexblog.svg"
                alt=""
                className="nossos__img"
              />
            </div>
            <div className="nossos__content">
              <img
                src="/img/nossos/lescone.svg"
                alt=""
                className="nossos__img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nossos;

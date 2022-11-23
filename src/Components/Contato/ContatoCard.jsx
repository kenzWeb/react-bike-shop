import React from "react";

function ContatoCard() {
  return (
    <section className="Contato__Card">
      <div className="Contato__Card__container">
        <div className="contato__card">
          <div className="contato__left">
            <h2 className="contato__left-title">Loja Online</h2>
            <div className="contato__left-card">
              <div className="contato__contacts">
                <img
                  className="contato__left-img"
                  src="img/decoration/local.svg"
                  alt=""
                />
                <p className="contato__left-subtitle">
                  Rua Ali Perto, 35 Rio de Janeiro - RJ Brasil - Terra - Vila
                  Láctea
                </p>
              </div>
              <div className="contato__contacts">
                <img
                  className="contato__left-img"
                  src="img/decoration/email.svg"
                  alt=""
                />
                <p className="contato__left-subtitle">
                  vendas@bikcraft.com assistencia@bikcraft.com
                </p>
              </div>
              <div className="contato__contacts">
                <img
                  className="contato__left-img"
                  src="img/decoration/telefone.svg"
                  alt=""
                />
                <p className="contato__left-subtitle">+55 22 99999-9999</p>
              </div>
            </div>
            <div className="contato__left-socials">
              <img
                className="contato__social-item"
                src="img/decoration/instagram.svg"
                alt=""
              />
              <img
                className="contato__social-item"
                src="img/decoration/youtube.svg"
                alt=""
              />
              <img
                className="contato__social-item"
                src="img/decoration/facebook.svg"
                alt=""
              />
            </div>
          </div>
          <div className="contato__right">
            <form action="" className="contato__form">
              <div className="contato__right-form_basic">
                <div className="contato__form-group">
                  <label htmlFor="name">Nome</label>
                  <input
                    className="basic__form-input contato__form-input"
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="form__basic contato__form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    name="tel"
                    placeholder="(22) 99999-9999"
                    className="contato__form-input"
                  />
                </div>
              </div>
              <div className="form__basic contato__form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="contato@email.com"
                  className="contato__form-input"
                />
              </div>
              <div className="contato__form-group">
                <label className="contato__form-label_big" htmlFor="mensagem">
                  Mensagem
                </label>
                <textarea
                  type="mensagem"
                  name="mensagem"
                  placeholder="O que você precisa?"
                  className="contato__form-input_big contato__form-input"
                />
              </div>
              <button className="button contato__from-btn">
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContatoCard;

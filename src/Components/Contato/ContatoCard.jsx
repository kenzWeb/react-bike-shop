import React from "react";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    opacity: 0,
  },

  visible: (c) => ({
    opacity: 1,
    transition: { delay: c * 0.1, duration: 5 },
  }),
};

function ContatoCard() {
  return (
    <motion.section className="Contato__Card">
      <div className="Contato__Card__container">
        <motion.div
          className="contato__card"
          initial={{ x: -2000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6}}
        >
          <motion.div className="contato__left">
            <motion.h2
              className="contato__left-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Loja Online
            </motion.h2>
            <div className="contato__left-card">
              <motion.div
                className="contato__contacts"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <img
                  className="contato__left-img"
                  src="img/decoration/local.svg"
                  alt=""
                />
                <p className="contato__left-subtitle">
                  Rua Ali Perto, 35 Rio de Janeiro - RJ Brasil - Terra - Vila
                  Láctea
                </p>
              </motion.div>
              <motion.div
                className="contato__contacts"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <img
                  className="contato__left-img"
                  src="img/decoration/email.svg"
                  alt=""
                />
                <motion.p className="contato__left-subtitle">
                  vendas@bikcraft.com assistencia@bikcraft.com
                </motion.p>
              </motion.div>
              <motion.div
                className="contato__contacts"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <img
                  className="contato__left-img"
                  src="img/decoration/telefone.svg"
                  alt=""
                />
                <p className="contato__left-subtitle">+55 22 99999-9999</p>
              </motion.div>
            </div>
            <motion.div className="contato__left-socials">
              <motion.img
                className="contato__social-item"
                src="img/decoration/instagram.svg"
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.1 }}
              />
              <motion.img
                className="contato__social-item"
                src="img/decoration/youtube.svg"
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.4 }}
              />
              <motion.img
                className="contato__social-item"
                src="img/decoration/facebook.svg"
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.7 }}
              />
            </motion.div>
          </motion.div>
          <motion.div className="contato__right">
            <form action="" className="contato__form">
              <div className="contato__right-form_basic">
                <div className="contato__form-group">
                  <motion.label
                    htmlFor="name"
                    variants={textAnimation}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    Nome
                  </motion.label>
                  <input
                    className="basic__form-input contato__form-input"
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="form__basic contato__form-group">
                  <motion.label
                    htmlFor="phone"
                    variants={textAnimation}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  >
                    Telefone
                  </motion.label>
                  <input
                    type="tel"
                    name="tel"
                    placeholder="(22) 99999-9999"
                    className="contato__form-input"
                  />
                </div>
              </div>
              <div className="form__basic contato__form-group">
                <motion.label
                  htmlFor="email"
                  variants={textAnimation}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.8 }}
                >
                  Email
                </motion.label>
                <input
                  type="email"
                  name="email"
                  placeholder="contato@email.com"
                  className="contato__form-input"
                />
              </div>
              <div className="contato__form-group">
                <motion.label
                  className="contato__form-label_big"
                  htmlFor="mensagem"
                  variants={textAnimation}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2.4 }}
                >
                  Mensagem
                </motion.label>
                <motion.textarea
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
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ContatoCard;

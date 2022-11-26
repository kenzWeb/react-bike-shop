import React from "react";
import { motion } from "framer-motion";

const CardAnimation = {
  to: {
    opacity: 0,
    y: 1000,
  },
  from: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5 },
  }),
};

const Shop = () => {
  return (
    <motion.section
      className="shop"
      initial="to"
      whileInView="from"
      viewport={{ amount: 0.1, once: true }}
    >
      <div className="shop__container">
        <div className="shop__head">
          <h2 className="shop__head-title title">
            escolha a sua<span>.</span>
          </h2>
        </div>
      </div>
      <div className="shop__items">
        <motion.div className="shop__cart" variants={CardAnimation} custom={1}>
          <div className="shop__inner">
            <img className="shop-cart__img" src="img/shop/bike1.jpg" alt="" />
          </div>
          <h2 className="cart-title">Magic Migth</h2>
          <p className="cart-subtitle">R$ 2499</p>
        </motion.div>
        <motion.div className="shop__cart" variants={CardAnimation} custom={6}>
          <div className="shop__inner">
            <img className="shop-cart__img" src="img/shop/bike2.jpg" alt="" />
          </div>
          <h2 className="cart-title">Nimbus Stark</h2>
          <p className="cart-subtitle">R$ 4909</p>
        </motion.div>
        <motion.div className="shop__cart" variants={CardAnimation} custom={8}>
          <div className="shop__inner">
            <img className="shop-cart__img" src="img/shop/bike3.jpg" alt="" />
          </div>
          <h2 className="cart-title">Nebula Cosmic</h2>
          <p className="cart-subtitle">R$ 3999</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Shop;

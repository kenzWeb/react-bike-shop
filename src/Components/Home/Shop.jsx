import React from "react";

const Shop = () => {
  return (
    <section className="shop">
      <div className="shop__container">
        <div className="shop__head">
          <h2 className="shop__head-title title">
            escolha a sua<span>.</span>
          </h2>
        </div>
      </div>
      <div className="shop__items">
        <div className="shop__cart">
          <div className="shop__inner">
            <img className="shop-cart__img" src="img/shop/bike1.jpg" alt="" />
          </div>
          <h2 className="cart-title">Magic Migth</h2>
          <p className="cart-subtitle">R$ 2499</p>
        </div>
        <div className="shop__cart">
          <div className="shop__inner">
            <img className="shop-cart__img" src="img/shop/bike2.jpg" alt="" />
          </div>
          <h2 className="cart-title">Nimbus Stark</h2>
          <p className="cart-subtitle">R$ 4909</p>
        </div>
        <div className="shop__cart">
          <div className="shop__inner">
            <img className="shop-cart__img" src="img/shop/bike3.jpg" alt="" />
          </div>
          <h2 className="cart-title">Nebula Cosmic</h2>
          <p className="cart-subtitle">R$ 3999</p>
        </div>
      </div>
    </section>
  );
};

export default Shop;

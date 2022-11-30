import React from "react";

const termsCollection = [
  {
    title: "1. Política de Estornos",
    subtitle1:
      "1.1 Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro. ",
    subtitle2:
      "1.2  Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
    subtitle3:
      "1.3 Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
  },
  {
    title: "2. Conta do Usuário",
    subtitle1:
      "2.1 Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
    subtitle2:
      "2.2  Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
    subtitle3:
      "2.3 Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
  },
  {
    title: "3. Seguro BikCraft",
    subtitle1:
      "3.1 Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
    subtitle2:
      "3.2  Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
    subtitle3:
      "3.2  Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
  },
];

function Condicoes() {
  return (
    <section className="condicoes">
      <div className="condicoes__container">
        {termsCollection.map((el, index) => (
          <div className="terms__wrapper">
            <h2 className="terms__title">{el.title}</h2>
            <p className="terms__subtitle">{el.subtitle1}</p>
            <p className="terms__subtitle">{el.subtitle2}</p>
            <p className="terms__subtitle">{el.subtitle3}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Condicoes;

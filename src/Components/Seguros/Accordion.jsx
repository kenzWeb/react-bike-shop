import React from "react";
import { useState } from "react";

const dataCollection = [
  {
    index: 1,
    question: "qual forma de pagamento vocês aceitam?",
    answer:
      "Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
  },

  {
    index: 2,
    question: "Como posso entrar em contato?",
    answer:
      "Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
  },
  {
    index: 3,
    question: "Vocês possuem algum desconto?",
    answer:
      "Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
  },
  {
    index: 4,
    question: "Qual garantia que possuo?",
    answer:
      "Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
  },
  {
    index: 5,
    question: "Posso parcelar no boleto?",
    answer:
      "Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
  },
  {
    index: 6,
    question: "Quantas trocas posso fazer ao ano?",
    answer:
      "Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
  },
  {
    index: 7,
    question: "Qual BikCraft devo escolher para o meu tamanho?",
    answer:
      "Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
  },
];

function Accordion() {
  const [accordion, setAccordion] = useState(-1);

  function tooggleAccordion(index) {
    if (index === accordion) {
      setAccordion(-1);
      return;
    }
    setAccordion(index);
  }

  return (
    <section className="accordion">
      <div className="accordion__container">
        <div className="accordion__header">
          <h2 className="title">
            perguntas frequentes<span>.</span>
          </h2>
        </div>
        <div className="accordion__content">
          {dataCollection.map((el, index) => (
            <div
              key={index}
              className={`accordion__card ${el.index % 2 ? "bgg" : ""}`}
              onClick={() => tooggleAccordion(index)}
            >
              <div className="decoration__card-head">
                <img
                  src="img/nossas/decoEl.svg"
                  alt=""
                  className="accordion__title-deco"
                />
                <h2
                  className={`accordion__title ${
                    accordion === index ? "_active" : ""
                  }`}
                >
                  {el.question}
                </h2>
              </div>
              <p
                className={`accordion__subtitle ${
                  accordion === index ? "_active" : ""
                }`}
              >
                {el.answer}
              </p>
              <img
                src="img/accordion/btn.svg"
                alt=""
                className={`accordion__img ${
                  accordion === index ? "_active" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Accordion;

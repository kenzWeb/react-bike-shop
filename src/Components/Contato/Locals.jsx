import React from "react";

function Locals() {
  const LocalsCard = [
    {
      img: "img/locals/rio.jpg",
      title: "Rio de Janeiro",
      subtitleFirst: "Rua Ali Perto, 25 São Paulo - SP",
      subtitleSecond: "sp@bikcraft.com 11 99999-9999",
      time: "08-18h seg à dom",
    },
    {
      title: "São Paulo",
      img: "img/locals/sp.jpg",
      subtitleFirst: "Rua Ali Perto, 25 Rio de Janeiro - RJ",
      subtitleSecond: "rio@bikcraft.com 21 99999-9999",
      time: "08-18h seg à dom",
    },
  ];

  return (
    <section className="locals">
      <div className="locals__container">
        <div className="locals__header">
          <h2 className="locals__title title">
            loja locais<span>.</span>
          </h2>
        </div>
        <div className="locals__content">
          {LocalsCard.map((item, index) => (
            <div className="locals__card">
              <div className="locals__card-img">
                <img src={item.img} alt="" />
              </div>
              <div className="locals__card-info">
                <h2 className="locals__card-title">{item.title}</h2>
                <div className="locals__card-subtitle_wrapper">
									<p className="locals__card-subtitle">{item.subtitleFirst}</p>
									<p className="locals__card-subtitle">{item.subtitleSecond}</p>
								</div>
								<h2 className="locals__card-time">{item.time}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Locals;

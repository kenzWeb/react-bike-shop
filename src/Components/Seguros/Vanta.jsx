import React from 'react'

function Vanta() {
	return (
		<section className="vanta">
			<div className="vanta__container">
				<div className="vanta__header">
					<h2 className='title'>nossas vantagens<span>.</span></h2>
				</div>

				<div className="vanta__content">
					<div className="vanta__card">
						<img className="vanta__img" src="/img/decoration/item1.svg" alt="" />
						<h2 className="vanta__title">Reparo Elétrico</h2>
						<p className="vanta__subtitle subtitle">Garantimos o reparo competo do seu motor em caso de falhas. Sabemos que falhas são raras, mas estamos aqui caso ocorra.</p>
					</div>

					<div className="vanta__card">
						<img className="vanta__img" src="/img/decoration/item2.svg" alt="" />
						<h2 className="vanta__title">Reparo de Quadro</h2>
						<p className="vanta__subtitle subtitle">Nossos quadros são feitos para durar para sempre. Mas caso algo ocorra, ficamos felizes em reparar.</p>
					</div>

					<div className="vanta__card">
						<img className="vanta__img" src="/img/decoration/item5.svg" alt="" />
						<h2 className="vanta__title">Sustentável</h2>
						<p className="vanta__subtitle subtitle">Trabalhamos com a filosofia de desperdício zero. Qualquer parte defeituosa é reciclada e reutilizada em outro projeto.</p>
					</div>

					<div className="vanta__card">
						<img className="vanta__img" src="/img/decoration/item4.svg" alt="" />
						<h2 className="vanta__title">Recuperação</h2>
						<p className="vanta__subtitle subtitle">Recuperamos Bikcrafts roubadas sem custo adicional para o dono. Se não conseguirmos recuperar, damos uma nova para você.</p>
					</div>

					<div className="vanta__card">
						<img className="vanta__img" src="/img/decoration/item6.svg" alt="" />
						<h2 className="vanta__title">Segurança</h2>
						<p className="vanta__subtitle subtitle">O nosso seguro garante que todo reparo seja feito com peças genuínas e de alta qualidade. Confie na Bikcraft.</p>
					</div>

					<div className="vanta__card">
						<img className="vanta__img" src="/img/decoration/item3.svg" alt="" />
						<h2 className="vanta__title">Rapidez</h2>
						<p className="vanta__subtitle subtitle">A sua Bikcraft ficará pronta para uso no mesmo dia, caso você traga ela para ser reparada em uma das filiais.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Vanta
import './Promo.css';

function Promo({ handleAnchor }) {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__presentation">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button onClick={handleAnchor} className="promo__link">
            Узнать больше
          </button>
        </div>
        <div className="promo__globus">
          <span className="promo__globus-image"></span>
        </div>
      </div>
    </section>
  );
}

export default Promo;

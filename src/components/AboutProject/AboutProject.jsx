import './AboutProject.css';

function AboutProject({aboutProjectRef}) {
  return (
    <section ref={aboutProjectRef} className="about-project">
      <h2 className="about-project__header section-header">О проекте</h2>
      <ul className="about-project__info-list">
        <li className="about-project__info-item">
          <h4 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h4>
          <p className="about-project__explanation">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__info-item">
          <h4 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h4>
          <p className="about-project__explanation">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__timebar">
        <div className="about-project__segment">
          <span className="about-project__length">1 неделя</span>
          <span className="about-project__name">Back-end</span>
        </div>
        <div className="about-project__segment">
          <span className="about-project__length">4 недели</span>
          <span className="about-project__name">Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;

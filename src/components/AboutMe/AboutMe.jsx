import { Link } from 'react-router-dom';
import myPhoto from '../../images/my-photo.jpg';
import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__header section-header">Студент</h2>
      <div className="about-me__info-container">
        <article className="about-me__biography">
          <h3 className="about-me__name">Моё имя ...</h3>
          <p className="about-me__job">
            Похож на Фронтенд&#8209;разработчика, ∞ лет
          </p>
          <p className="about-me__info">
            Здесь можно написать, что все же где-то родился, что где то учился,
            и может чему-то научился. Потом может быть работал где-то и кем-то.
            Может быть оказался чем-то не доволен, решил заложить начало переменам,
            начав учиться на курсах Яндекс.Практикума.
            Может что-то из этого и получилось, но это не точно.
          </p>
          <Link
            className="my-link about-me__link"
            target={'_blank'}
            to={'https://github.com'}
          >
            Github
          </Link>
        </article>
        <img className="about-me__photo" src={myPhoto} alt="Моя фотография" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;

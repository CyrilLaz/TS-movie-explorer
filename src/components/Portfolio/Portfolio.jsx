import { Link } from 'react-router-dom';
import './Portfolio.css';
function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Link className="my-link portfolio__link" target={'_blank'} to={'https://ru.wikipedia.org/wiki/Статический_сайт'}>
            Статичный сайт
          </Link>
        </li>
        <li className="portfolio__item">
          <Link className="my-link portfolio__link" target={'_blank'} to={'https://ru.wikipedia.org/wiki/Адаптивный_веб-дизайн'}>
            Адаптивный сайт
          </Link>
        </li>
        <li className="portfolio__item">
          <Link className="my-link portfolio__link" target={'_blank'} to={'https://ru.wikipedia.org/wiki/Одностраничное_приложение'}>
            Одностраничное приложение
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;

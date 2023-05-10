import { Link } from 'react-router-dom';
import './Footer.css';

function Footer({ isMain, isHidden }) {
  const footerClassName = `footer${isHidden ? ' footer_hidden' : ''}`;
  const footerContainerClassName = `footer__container${
    isMain ? ' footer__container_main' : ''
  }`;
  return (
    <footer className={footerClassName}>
      <p className="footer__head">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className={footerContainerClassName}>
        <p className="footer__copy">&copy; 2023</p>
        <ul className="footer__list">
          <li className="footer__item">
            <Link
              className="my-link footer__link"
              target={'_blank'}
              to={'https://practicum.yandex.ru/'}
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li className="footer__item">
            <Link
              className="my-link footer__link"
              target={'_blank'}
              to={'https://github.com/'}
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

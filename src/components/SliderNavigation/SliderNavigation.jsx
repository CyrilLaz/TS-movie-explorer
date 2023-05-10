import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SliderNavigation.css';

function SliderNavigation(props) {
  const [sliderIsOpen, setSliderIsOpen] = useState(false);

  const linkClassName = ({ isActive }) =>
    `my-link slider-navigation__link${
      isActive ? ' slider-navigation__link_active' : ''
    }`;
  const buttonClassName = ({ isActive }) =>
    `my-button slider-navigation__slider-button${
      isActive ? ' slider-navigation__slider-button_active' : ''
    }`;
  const sliderNavigationClassName = `slider-navigation ${
    sliderIsOpen ? ' slider-navigation_visible' : ''
  }`;
  const sliderNavigationContainerClassName = `slider-navigation__container${
    sliderIsOpen ? ' slider-navigation__container_visible' : ''
  }`;

  function toggleSlider() {
    setSliderIsOpen(!sliderIsOpen);
  }

  return (
    <>
      <div
        onClick={toggleSlider}
        className="my-button header__burger"
      ></div>
      <div className={sliderNavigationClassName}>
        <div className={sliderNavigationContainerClassName}>
          <div
            onClick={toggleSlider}
            className="my-button slider-navigation__close-button"
          ></div>
          <nav className="slider-navigation__menu">
            <ul className="slider-navigation__list">
              <li className="slider-navigation__menu-item">
                <ul className="slider-navigation__links">
                  <li className="slider-navigation__links-item">
                    <NavLink onClick={toggleSlider} className={linkClassName} to={'/'}>
                      Главная
                    </NavLink>
                  </li>
                  <li className="slider-navigation__links-item">
                    <NavLink onClick={toggleSlider} className={linkClassName} to={'/movies'}>
                      Фильмы
                    </NavLink>
                  </li>
                  <li className="slider-navigation__links-item">
                    <NavLink onClick={toggleSlider} className={linkClassName} to={'/saved-movies'}>
                      Сохранённые фильмы
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="slider-navigation__menu-item">
                <NavLink onClick={toggleSlider} className={buttonClassName} to={'/profile'}>
                  Аккаунт
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default SliderNavigation;

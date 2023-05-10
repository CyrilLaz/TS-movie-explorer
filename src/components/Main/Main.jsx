import { useRef } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css';

function Main(props) {
  const aboutProjectRef = useRef();

  function scrollToAbout() {
    aboutProjectRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }
  return (
    <main className="Main">
      <Promo handleAnchor={scrollToAbout} />
      <AboutProject aboutProjectRef={aboutProjectRef} />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;

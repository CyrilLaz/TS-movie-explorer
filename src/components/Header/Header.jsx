import { Link } from 'react-router-dom';
import './Header.css';
function Header({ children, isForm, isMain }) {
  const headerClassName = `header${isMain ? ' main-header' : ''}`;
  const headerContainerClassName = `header__container ${
    isMain ? ' header__container_main' : ''
  }${isForm ? ' header__container_form' : ''}`;
  const headerLogoClassName = `header__logo${
    isForm ? ' header__logo_form' : ''
  }`;
  return (
    <header className={headerClassName}>
      <div className={headerContainerClassName}>
        <Link to={'/'} className={headerLogoClassName}></Link>
        {children}
      </div>
    </header>
  );
}

export default Header;

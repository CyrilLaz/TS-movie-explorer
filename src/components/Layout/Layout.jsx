import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

function Layout({ header, isMain, isHiddenFooter }) {
  return (
    <>
      <Header {...header} isMain={isMain} />
      <Outlet />
      <Footer isHidden={isHiddenFooter} isMain={isMain} />
    </>
  );
}

export default Layout;

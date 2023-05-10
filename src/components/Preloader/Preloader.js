import './Preloader.css';

const Preloader = (props) => {
  const preloaderClassName = `preloader${
    props.handle ? ' preloader__visible' : ''
  }`;
  return (
    <div className={preloaderClassName}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;

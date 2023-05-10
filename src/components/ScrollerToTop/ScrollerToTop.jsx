import './ScrollerToTop.css';
function ScrollerToTop(props) {
  return (
    <div onClick={props.onClick} className={`scroller${props.isScroller?' scroller_is-active':''}`}>
      <div className="scroller__container"></div>
    </div>
  );
}

export default ScrollerToTop;

import './Toggle.css';
function Toggle({isShortMovie}) {
  return (
    <div
      className={`toggle${isShortMovie ? ' toggle_active' : ''}`}
    ></div>
  );
}

export default Toggle;

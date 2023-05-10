import './Modal.css';

export default function Modal(props) {
  const modalClassName = `modal${props.isOpen ? ' modal_opened' : ''}`;
  const modalImageClassName = `modal__image${props.isResponse?' modal__image_ok':''}`;
  const modalTextClassName = `modal__text${props.isResponse?' modal__text_ok':''}`
  return (
    <div className={modalClassName}>
      <div className="modal__container">
        <div className="modal__close" onClick={props.close}></div>
        <div className={modalImageClassName}></div>
        <span className={modalTextClassName}>{props.message}</span>
      </div>
    </div>
  );
}

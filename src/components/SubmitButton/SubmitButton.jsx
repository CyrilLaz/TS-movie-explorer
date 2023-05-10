import './SubmitButton.css';
function SubmitButton(props) {
  const buttonClassName = `my-button submit-button${
    props.isButtonDisabled ? ' submit-button_inactive' : ''
  }`;
  return (
    <button type="submit" className={buttonClassName}>
      {props.button}
    </button>
  );
}

export default SubmitButton;

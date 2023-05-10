import Form from '../Form/Form';

function LoginWithForm(props) {
  return (
    <>
      <Form
        {...props}
        header={props.header}
        formName="login"
        greeting="Рады видеть!!"
        inputs={[
          {
            type: 'email',
            id: 'email',
            name: 'email',
            label: 'E-mail',
          },
          {
            type: 'password',
            id: 'password',
            name: 'password',
            label: 'Пароль',
            autoComplete: 'current-password',
            minLength: 3,
            maxLength: 30,
          },
        ]}
        button="Войти"
        entryText="Ещё не зарегистрированы?"
        entryLinkPath="/signup"
        entryLinkText="Регистрация"
      />
    </>
  );
}

export default LoginWithForm;

import Form from '../Form/Form';

function RegisterWithForm(props) {
  return (
    <>
      <Form
        {...props}
        header={props.header}
        formName="register"
        greeting="Добро пожаловать!"
        inputs={[
          {
            type: 'text',
            id: 'name',
            name: 'name',
            label: 'Имя',
            minLength:2,
            maxLength:30,
            autoComplete:"username ",
          },
          {
            type: 'email',
            id: 'email',
            name: 'email',
            label: 'E-mail',
            autoComplete:"email",
          },
          {
            type: 'password',
            id: 'password',
            name: 'password',
            label: 'Пароль',
            minLength:3,
            maxLength:30,
            autoComplete:"new-password",
          },
        ]}
        button="Зарегистрироваться"
        entryText="Уже зарегистрированы?"
        entryLinkPath="/signin"
        entryLinkText="Войти"
      />
    </>
  );
}

export default RegisterWithForm;

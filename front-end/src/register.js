// import

const SIX = 6;
const Twelve = 12;

export default function Register() {
  const [nameType, setNameType] = useState('');
  const [emailTypeR, setEmailTypeR] = useState('');
  const [passRegister, setPassRegister] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  // const [erroMsg, setErroMsg] = useState(false);

  const validateEmail = (userEmail) => {
    const checkEmail = /\S+@\S+\.\S+/;
    return checkEmail.test(userEmail);
  };
  useEffect(() => {
    const validateLogin = () => {
      if (validateEmail(emailTypeR)
      && passRegister.length > SIX
      && nameType.length > Twelve) {
        setButtonDisabled(false);
        return;
      }
      setButtonDisabled(true);
    };
    validateLogin();
  });

  return (
    <div>
      <p>Nome:</p>
      <input
        type="text"
        name="Nome"
        value={ nameType }
        onChange={ (elem) => setNameType(elem.target.value) }
        data-testid="commom_register__input-name"
      />

      <p>Email:</p>
      <input
        type="text"
        name="Email"
        value={ emailTypeR }
        onChange={ (elem) => setEmailTypeR(elem.target.value) }
        data-testid="commom_register__input-email"
      />

      <p>Email:</p>
      <input
        type="password"
        name="password"
        value={ passRegister }
        onChange={ (elem) => setPassRegister(elem.target.value) }
        data-testid="commom_register__input-password"
      />

      <button
        type="button"
        name="Entrar"
        disabled={ buttonDisabled }
        // onClick={}
        data-testid="commom_register__botton-register"
      >
        Entrar
      </button>

      {/* { erroMsg ? <p
        data-testid="commom_register__element-invalid-register"
      >
        Email ou Senha invalidos.
      </p> : null } */}
    </div>
  );
}

// Fim

import { useState } from 'react';
import Btn from './btn';
import '../styles/auth.css';

function Register() {
  // const regxValidation = {
  //   email: '^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$',
  //   pasword: /[^a-zA-Z0-9 ]/,
  // };
  const [inputs, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const inputHandler = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setInput({ ...inputs, [name]: value });
  };

  return (
    <section className="container">
      <div className="authForm">
        <h1>REGISTER</h1>
        <input
          type="email"
          name="email"
          value={inputs.email}
          onInput={inputHandler}
          placeholder="Name"
        />
        <input
          type="text"
          name="name"
          value={inputs.name}
          onInput={inputHandler}
          placeholder="Email Address"
        />
        <input
          type="password"
          name="password"
          value={inputs.password}
          onInput={inputHandler}
          placeholder="password"
        />
        <input
          type="password"
          name="confirmPassword"
          value={inputs.confirmPassword}
          onInput={inputHandler}
          placeholder="Confirm Password"
        />

        <Btn click={null} Name="REGISTER" />
      </div>

      <p />
    </section>
  );
}

export default Register;
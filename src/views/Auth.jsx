import React, { useState, useContext } from "react";
import styled from "styled-components";
import context from "../store/context";
import { password } from "../constant";

const Auth = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const { setAuth, isAuth, state } = useContext(context);

  const login = (e) => {
    e.preventDefault();
    if (passwordValue === password) {
      console.log(password);
      setAuth(!isAuth, state);
    }
  };

  return (
    <AuthContainer>
      <form onSubmit={login}>
        <Input
          type="password"
          value={passwordValue}
          placeholder="Entrer le mot de passe"
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </form>
    </AuthContainer>
  );
};

const AuthContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

  form {
    display: flex;
    flex-direction: column;
  }

  button {
    color: black;
  }
`;

const Input = styled.input``;

export default Auth;

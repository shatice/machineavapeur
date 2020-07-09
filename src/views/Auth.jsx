import React, { useState } from "react";
import styled from "styled-components";
import { password } from "../constant";

/***** ASSETS *****/
import bg from "../assets/img/disclaimer_bg.jpg"; 

const Auth = () => {
  const [passwordValue, setPasswordValue] = useState("");

  const login = () => {
    if (passwordValue === password) {
      window.localStorage.setItem("isProtected", false);
    }
  };

  return (
    <AuthContainer>
      <h1>DISCLAIMER</h1>
      <p>Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Bachelor de l’école HETIC.<br></br>Les contenus présentés n'ont pas fait l'objet d'une demande de droit d'utilisation.<br></br>Ce site ne sera en aucun cas exploité à des fins commerciales et ne sera pas publié.</p>
      <form onSubmit={login}>
        <Input
          type="password"
          value={passwordValue}
          placeholder="Entrer le mot de passe"
          onChange={(e) => setPasswordValue(e.target.value)}
          class="w3-border-0 w3-hover-red"
        />
        <button onClick={login}>Entrer</button>
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
  animation: fadeIn 2s ease-out;
  background-color: #282928; 
  margin: 0 auto;
  background-image: url("${bg}"); 
  background-size: cover; 
  filter: grayscale(1); 

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 2.5rem;
  }

  p {
    display: block;
    width: 50%;
    text-align: center;
    line-height: 1.5;
    font-size: 0.875rem;
    text-shadow: 5px 5px 8px black; 
    padding-bottom: 2rem;
    font-family: 'din_bold';
  }

  form {
    display: flex;
    flex-direction: column;
    width: 10rem;
    background-color: none;
  }

  button {
    color: white;
    text-transform: uppercase; 
    padding-top: 1rem;
    transition: all 0.5s ease-out;
    &:hover {
      text-decoration: underline;
    }
  } 

`;

const Input = styled.input`
  width: 100%;
  height: 1.5rem;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: rgba(255,255,255,0.3);
  opacity: 0.6;
  padding: 1rem; 
  color: white; 
  display: block; 
  margin-bottom: 2rem; 
`;

export default Auth;

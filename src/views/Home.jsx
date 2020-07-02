import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/***** COMPONENTS *****/
import Logo from "../components/atoms/Logo";

const Home = () => {
  return (
    <Container>
      <h1>La folle histoire du progres</h1>
      {/* <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2> */}
      <p>Les premiers travaux sur la machine à vapeur remontent à l'Antiquité mais connaissent une évolution significative à la fin du XVIIIème siècle. L’utilisation de ce moteur d’énergie mécanique se développe et marque le début de la révolution industrielle, qui fait basculer progressivement une société à dominante agraire et artisanale vers une société commerciale et industrielle. Cette innovation entraîne l’essor du charbon et l’exploitation industrielle des mines.</p>
      <Logo/>
      <Link to="chapter1/part0">
        Commencer l'expérience
      </Link>
    </Container>
  ); 
}

const Container = styled.section `
  position: relative; 
  width: 100%; 
  height: 100vh; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  animation: fadeIn 2s ease-out; 

  h1 {
    font-size: 4rem; 
    text-transform: uppercase; 
    max-width: 45%; 
    text-align: center; 
  }

  p {
    font-size: .875rem; 
    max-width: 38%; 
    text-align: center;  
    line-height: 1.5; 
  }

  h1, 
  p {
    margin: 0 auto 2rem; 
  }

  a {
    position: absolute; 
    bottom: 4rem; 
    margin: 0 auto; 
    text-transform: uppercase; 
    text-decoration: underline; 
    transition: letter-spacing .2s ease-out; 

    &:hover {
      letter-spacing: .05rem; 
    } 
  }
  
`

export default Home; 
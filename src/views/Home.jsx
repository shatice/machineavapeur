import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

/***** COMPONENTS *****/
import Logo from "../components/atoms/Logo";

/***** ASSETS *****/
import introVideo from "../assets/videos/intro.mp4"; 

const Home = () => {
  return (
    <Container>
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={introVideo} type="video/mp4"/>
      </video>
      <h1>La folle histoire du progres</h1>
      <p>Aujourd’hui, le réchauffement climatique et la mise en danger de
      certains écosystèmes sont des réalités écologiques.
      Dans la mise en oeuvre de solutions innovantes pour contrer ces dérèglements, l’humain
      se confronte aux conséquences de ses propres actes. À travers trois
      grands thèmes historiques de l’humanité, faisons le parallèle entre le
      Progrès et la crise écologique globale actuelle de la Planète.
      </p>
      <Logo />
      <Link to="chapter1/part0">Commencer l'expérience</Link>
    </Container>
  );
};

const bgAppear = keyframes `
  from {
    background-color: rgba(0, 0, 0, 1);
  } to {
    background-color: rgba(0, 0, 0, .4);
  }
`

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${bgAppear} 2s ease-out forwards; 

  video {
    z-index: -10; 
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    object-fit: cover;  
  }

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    max-width: 600px;
    text-align: center;
  }


  p {
    font-size: 0.875rem;
    max-width: 60%;
    text-align: center;
    line-height: 1.5;
    /* font-family: 'din_bold_condensed' */
  }

  h1 {
    margin: 0 auto 2rem;
  }

  img {
    margin-top: 4rem;
  }


  a {
    font-size: 0.8rem;
    position: absolute;
    bottom: 7rem;
    margin: 0 auto;
    text-transform: uppercase;
    text-decoration: underline;
    transition: letter-spacing 0.2s ease-out;
    ${'' /* color: #C09C1C;    */}
    &:hover {
      letter-spacing: 0.05rem;
    }
  }
`;

export default Home;

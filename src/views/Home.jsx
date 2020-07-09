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
      <p>
        Aujourd’hui, le réchauffement climatique et la mise en danger de
        certains écosystèmes sont des réalités écologiques. Dans la mise en
        oeuvre de solutions innovantes pour contrer ces dérèglements, l’humain
        se confronte aux conséquences de ses propres actes. À travers trois
        grands thèmes historiques de l’humanité, faisons le parallèle entre le
        Progrès et la crise écologique globale actuelle de la Planète.
      </p>
      <Logo />
      <Link to="chapter1/part0">Commencer l'expérience</Link>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadeIn 2s ease-out;

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
    font-size: 0.875rem;
    position: absolute;
    bottom: 4rem;
    margin: 0 auto;
    text-transform: uppercase;
    text-decoration: underline;
    transition: letter-spacing 0.2s ease-out;

    &:hover {
      letter-spacing: 0.05rem;
    }
  }
`;

export default Home;

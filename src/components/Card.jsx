import React, { } from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <CardUI>
      <img 
      src="" 
      alt=""/>
      <p>La machine à vapeur est un moteur à combustion externe qui transforme l'énergie thermique de la vapeur d'eau (produite par une ou des chaudières) en énergie mécanique. Elle fonctionne grâce au charbon qui est alors la seule énergie qui produit assez de chaleur. À partir de là commence l'exploitation industrielle des mines de charbon un peu partout en Europe, puis dans le monde.</p>
    </CardUI>
  ); 
}

const CardUI = styled.article `
  width: 340px; 
  min-height: 250px; 
  max-height: 500px; 
  background-color: #282828d7;

  img {
    width: 100%;
    height: 180px;  
    display: block;
    object-fit: cover;  
  }

  p {
    padding: 1.5rem 1rem; 
    font-family: sans-serif; 
    font-size: .875rem; 
    letter-spacing: .2rem; 
    color: #ECECE9; 
  }
`

export default Card;
import React, { useState } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Infos from "../../../components/molecules/Infos";

const BackgroundImage = ({ src, alt }) => {

  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <div>
      <Image 
      src={ src }
      alt={ alt }
      filter="true"/>
      <Infos 
      setIsAnimated={ setIsAnimated }
      title={ "Pollution atmosphérique" }
      content={ "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." }
      top="10"
      left="35"
      bottomCard="-400"
      leftCard="-350"
      />
    </div>
  ); 
}

const Image = styled.img `
  z-index: -1; 
  width: 100%; 
  height: 100%; 
  position: absolute; 
  top: 0; 
  left: 0; 
  object-fit: cover; 
  filter: ${({ filter }) => (filter ? "grayscale(1)" : "grayscale(0)")}; 

  &:hover {
    filter: grayscale(0); 
  }
`

export default BackgroundImage; 
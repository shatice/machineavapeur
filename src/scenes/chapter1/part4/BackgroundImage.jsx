import React, { useState } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Infos from "../../../components/molecules/Infos";

const BackgroundImage = ({ src, alt, partData }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <div>
      <Image src={src} alt={alt} filter="true" />
      {partData && (
        <Infos
          setIsAnimated={setIsAnimated}
          isActive={isAnimated}
          title={partData[3]?.cards[0].title}
          content={partData[3]?.cards[0].content}
          top="10"
          left="35"
          bottomCard="-400"
          leftCard="-350"
        />
      )}
    </div>
  );
};

const Image = styled.img`
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
`;

export default BackgroundImage;

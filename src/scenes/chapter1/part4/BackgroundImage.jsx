import React, { useState } from "react";
import styled from "styled-components";

/***** COMPONENTS *****/
import Infos from "../../../components/molecules/Infos";

const BackgroundImage = ({ src, alt, partData }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <div>
      <Image src={src} alt={alt} filter={isAnimated ? true : false} />
      {partData && (
        <Infos
          setIsAnimated={setIsAnimated}
          isActive={isAnimated}
          title={partData[3]?.cards[1].title}
          content={partData[3]?.cards[1].content}
          top="10"
          left="35"
          bottomCard="-400"
          leftCard="-200"
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
  filter: ${({ filter }) => (filter ? "grayscale(0)" : "grayscale(1)")};
`;

export default BackgroundImage;

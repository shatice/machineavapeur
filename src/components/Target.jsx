import React from "react";
import styled from "styled-components";

const StyledTarget = styled.div`
  transition: background-color 0.2s ease-out;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: white;
  background-color: #c09c1c;
  z-index: 10;

  &:hover {
    /* background-color: #c09c1c; */
  }
`;
const Position = styled.div`
  cursor: pointer;
  position: absolute;
  top: ${({ top }) => top}px;
  bottom: ${({ bottom }) => bottom}px;
  right: ${({ right }) => right}px;
  left: ${({ left }) => left}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TargetText = styled.div`
  color: white;
  z-index: 12;
  margin-top: 10px;
`;

const TargetUI = ({
  title,
  top,
  bottom,
  right,
  left,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Position
      top={top}
      bottom={bottom}
      right={right}
      left={left}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <StyledTarget top={top} right={right} />
      <TargetText>{title}</TargetText>
    </Position>
  );
};

export default TargetUI;

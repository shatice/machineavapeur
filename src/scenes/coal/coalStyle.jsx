import styled from "styled-components";

const InfiniteScroll = styled.section`
  height: 300vh;
  z-index: -1000;
`;

const CoalWrapper = styled.section`
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  background-color: #d8d6c8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MecaContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MecaWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MecaElem = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width}px;
  display: ${({ display }) => (display ? "flex" : "none")};
  transform: scale(0.8);
`;
const CoalImage = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width}px;
  display: ${({ display }) => (display ? "flex" : "none")};
  transform: scale(0.8);
`;

export {
  InfiniteScroll,
  CoalWrapper,
  MecaContainer,
  MecaWrapper,
  MecaElem,
  CoalImage,
};

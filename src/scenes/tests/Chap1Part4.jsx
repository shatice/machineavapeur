import React, { } from "react";
import '../../styles/styles.scss'; 
import styled from "styled-components";

const Chap1Part4 = () => {
  return (
    // <div className="">
    //   <img className="test" src="assets/img/chap_1/partie_4/c1p4_background.jpg" alt=""/>
    //   <img src="assets/img/chap_1/partie_4/c1p4_cloud1.png" alt=""/>
    //   <img src="assets/img/chap_1/partie_4/c1p4_cloud2.png" alt=""/>
    //   <img src="assets/img/chap_1/partie_4/c1p4_cloud3.png" alt=""/>
    //   <img src="assets/img/chap_1/partie_4/c1p4_cloud4.png" alt=""/>
    //   <img src="assets/img/chap_1/partie_4/c1p4_ocean.png" alt=""/>
    //   <img src="assets/img/chap_1/partie_4/c1p4_rock.png" alt=""/>
    //   <img src="assets/img/chap_1/partie_4/c1p4_towers.png" alt=""/>
    //   <img src="assets/img/chap_1/partie_4/c1p4_nature.png" alt=""/>
    // </div>
    <Background>
      {/* <Towers src="assets/img/chap_1/partie_4/c1p4_towers.png" alt=""/> */}
      {/* <CoalIndustry>
        <Smoke>
          <img src="assets/img/chap_1/partie_4/c1p4_towers.png" alt=""/>
        </Smoke>
        <Tower src="assets/img/chap_1/partie_4/c1p4_tower.png" alt=""/>/>
      </CoalIndustry> */}
      <Ecology>
        <Nature src="assets/img/chap_1/partie_4/c1p4_nature.png" alt=""/>
        <Water src="assets/img/chap_1/partie_4/c1p4_water.jpg" alt=""/>
      </Ecology>
    </Background>
  ); 
}

const Background = styled.section `
  /* border: solid red;  */
  width: 100vw; 
  height: 100vh; 
  background-image: url('assets/img/chap_1/partie_4/c1p4_background.jpg'); 
  background-repeat: no-repeat;
  display: flex; 
  flex-direction: row; 
  justify-content: space-between; 
  padding: 0 100px; 
`
const Towers = styled.img `
  /* border: solid red; */
  width: auto; 
  height: 40%; 
  align-self: flex-end; 
`

const CoalIndustry = styled.section `
  width: 40% auto; 
  border: solid red; 
  align-self: flex-end;
`
const Tower = styled.section `
  width: 40% auto; 
  border: solid red; 
  align-self: flex-end;
`
// const Smoke = styled.section `
//   width: 40% auto; 
//   border: solid red; 
//   align-self: flex-end;
// `

const Ecology = styled.section `
  /* border: solid red; */
  width: 50%; 
  height: auto; 
  align-self: center;
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr; 
`
const Nature = styled.img `
  /* border: solid green; */
  width: 100%;
  height: auto; 
  grid-column: 1; 
  grid-row: 1; 
  z-index: 2; 
`
const Water = styled.img `
  transform: translateY(-50px); 
  /* border: solid green; */
  width: 80%;
  margin: 0 auto; 
  height: auto; 
  grid-column: 1; 
  grid-row: 1; 
`

const Smoke = styled.img `

`

export default Chap1Part4; 
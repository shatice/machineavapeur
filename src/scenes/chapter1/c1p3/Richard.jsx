import React, { useState } from "react";
import styled from "styled-components";
import './style.scss'; 

/***** COMPONENTS *****/
import Infos from "../../../components/organisms/Infos";

const Richard = () => {

  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <Container
    className={ isAnimated ? "isAnimated" : ""}
    >
      <img 
      src="assets/img/chap_1/partie_3/c1p3_frame_richard.png" 
      alt=""/>
      <img 
      src="assets/img/chap_1/partie_3/c1p3_richard.png" 
      alt=""
      className="richard"/>
      <div class="scene">
        <div className="coin">
          <div className="coin__card">
            <img 
            src="assets/img/chap_1/partie_3/c1p3_coin_queen.png" 
            alt=""
            className="coin__side coin__side--queen"
            />
            <img 
            src="assets/img/chap_1/partie_3/c1p3_coin_wagon.png" 
            alt=""
            className="coin__side coin__side--wagon"
            />
          </div>
        </div>
      </div>

      <Infos 
      setIsAnimated={ setIsAnimated }
      title={ "Le charbon" }
      content={ "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." }
      top="15"
      left="55"
      leftCard="100"
      bottomCard="20"
      />
    </Container>
  ); 
}

const Container = styled.div `
  width: 35%; 
  height: fit-content; 
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr; 
  position: relative;
  transform: rotate(5deg);

  img {
    filter: grayscale(1); 
  }
  
  .infos {
    transform: rotate(-5deg); 
  }

  &.isAnimated {
    z-index: 10; 

    img {
      filter: grayscale(0); 
    }

    .coin__card {
      transform: rotateY(180deg);
      width: 70px; 
      height: 70px; 
    }

    .richard {
      transition: all .5s linear; 
      transform: scale(3); 
    }

    .coin {
      animation: flipping 1s forwards; 
    }
  }

  img {
    width: 100%;
    grid-column: 1; 
    grid-row: 1; 
  }

  .coin {
    grid-column: 1; 
    grid-row: 1; 
    width: 5%; 
    height: auto;
    position: absolute;
    bottom: 40%;
    left: 62%; 
    
    img {
      width: 100%;
    }
  }

  .coin {
  perspective: 500px;
  perspective-origin: 100px 100px;
}

.coin__card {
  position: relative;
  transform-style: preserve-3d;
  width: 20px;
  height: 20px;
  transition: transform 1.5s;
}

.coin__side {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.coin__side--queen {
}

.coin__side--wagon {
  transform: rotateY(180deg);
}
`

export default Richard; 
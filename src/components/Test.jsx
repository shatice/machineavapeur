import React, { } from "react";
import styled from "styled-components";

import Infos from "./organisms/Infos"; 

const Test = ( ) => {
  return (
    <div>
      <Infos
      left="0"
      bottomCard="-300"
      leftCard="300"
      title={"coucou"}
      content={"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
      alignSelf={"flex-end" }/>
    </div>
  );
};

export default Test;

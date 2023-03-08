import React, { useState } from "react";
import {
  Section,
  Container,
  Box,
  Box1,
  CardFront,
  CardBack,
  Text,
} from "./listelements";
import "../About/about.css";
import { Place, Place1 } from "../About/aboutelements";

const List = ({ mg1, mg2, mg3, mg4, mg5, mg6 }) => {

const [turn, setturn] = useState(false)




window.addEventListener('scroll',()=>{
    if(window.scrollY>864){
        setturn(true)
    }
})



  return (
      <>
      <Place1 show={turn}></Place1>
    <Section show={turn}>
      <Container>
        <Box>
          <CardFront img={mg1}></CardFront>
          <CardBack>
            <Text className="text">Rolling</Text>
          </CardBack>
        </Box>

        <Box1 show={turn}>
          <CardFront img={mg2}></CardFront>
          <CardBack>
            <Text className="text" >Cinammon</Text>
          </CardBack>
        </Box1>
        <Box>
          <CardFront img={mg3}></CardFront>
          <CardBack>
            <Text className="text" >Cherry</Text>
          </CardBack>
        </Box>
      </Container>
    </Section>
    <Place show={turn}></Place>
    </>
  );
};

export default List;

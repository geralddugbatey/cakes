import styled from 'styled-components'
import {GiCandleFlame} from 'react-icons/gi'

export const Container = styled.div`

grid-column: container-start / container-end;

padding:1vh;
 background-color:#fff; 
height:80vh;
background-color:${({show})=>(
    show ? '#FFC0CB' : "#fff"
)};

transition: all 0.7s ease-in-out;


@media screen and (max-width:375px) {
    
    height:65vh;
}
`

export const Slide = styled.div`


display: inline-block;

height: 60vh;
  width: 100%;
transition:0.2s all ease-in-out;
background : url(${props => props.img});
background-repeat:no-repeat;
background-size:cover;
background-position:center;

@media screen and (max-width:375px) {
    
    height:50vh;
}

`
export const Div1 = styled.div`
height:calc(4vw + 4vh);

`

export const Show = styled.div`

margin: 0 auto;
  overflow: hidden;
  border-radius:2rem;
  height:60vh;

position: relative;

@media screen and (max-width:375px) {
    
    height:50vh;
}

`



export const SliderShow = styled.div`
  white-space: nowrap;
  transition:1000ms ease;
  width:100%;
`

export const Box = styled.div`
transition:0.2s all ease-in-out;
  text-align: center;
 

  position: absolute;
  
  left:10rem;
  bottom:1.5rem;
`

export const Label = styled.div`
transition:0.2s all ease-in-out;
  text-align: center;
 

  position: absolute;
  
  right:10rem;
  top:1.5rem;

  z-index:9;
`


export const H1 = styled.h1`


color:white;

`




export const Candles = styled(GiCandleFlame)`

display: inline-block;
  height: 20px;
  width: 20px;
  
  cursor: pointer;
  margin: 15px 7px 0px;

  transition:0.2 all ease-in-out;
  &:hover{
      transition:0.2 all ease-in-out;
      color:white;
  }

`
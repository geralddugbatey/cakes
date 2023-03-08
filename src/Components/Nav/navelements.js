import styled from 'styled-components'
import {GiCherry} from 'react-icons/gi'


export const Header = styled.header`

 background: #fff;
 height: ${({open})=>(
     open ? 'calc(2.5vw + 2.5vh);' : 'calc(4vw + 4vh);'
 )} ;     
 box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  font-size: calc(1rem + 1vw);
  position: fixed;
  width:100%;
    z-index:10;

`

export const Cherry = styled(GiCherry)`

font-size: calc(1.5rem + 1vw);
transition: all 0.2s ease-in-out;
`      
export const H1 = styled.h1`
transition: all 0.2s ease-in-out;
font-size: calc(1rem + 1vw);
transform: scaleX(${({open})=>(
    open ? '0' : '1'
)});
/* display:${({open})=>(
    open ? 'none' : 'inherit'
)}; */
`

export const Div = styled.div`

width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;

`



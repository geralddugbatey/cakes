import styled from 'styled-components'
import {AiOutlineWhatsApp,AiOutlineInstagram} from 'react-icons/ai'


export const Footer1 = styled.div`
cursor: pointer;
grid-column:container-start / container-end;
 background: #fff;
 height: calc(4vw + 4vh);
   
 box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  font-size: calc(1rem + 1vw);
  position:relative;
  width:100%;
   

`


export const Instagram = styled(AiOutlineInstagram)`

font-size: calc(1.5rem + 1vw);
transition: all 0.2s ease-in-out;
&:hover{
    color:#FFC0CB;
}

`      

export const Whatsapp = styled(AiOutlineWhatsApp)`

font-size: calc(1.5rem + 1vw);
transition: all 0.2s ease-in-out;

&:hover{
    color:#FFC0CB;
}
`   


export const Div = styled.div`

width:50%;
height:100%;
display:flex;
justify-content:space-between;
align-items:center;
z-index:10;
transition:0.6s all ease-in-out;
margin:auto;



`




import styled from 'styled-components'


export const D = styled.div`
grid-column: container-start / container-end;
padding:3vh;
text-align:center;

background-color:${({show})=>(
    show ? '#FFC0CB' : '#fff'
)};
transition:all 1.4s ease-in-out;
`


export const Heading = styled.h1`
transition:all 2.4s ease-in-out;
font-size:calc(2rem + 2vw);;
position: relative;
opacity:${({show})=>(
    show ? '1' : '0'
)};
color:${({show})=>(
    show ? '#fff' : '#FFC0CB'
)};
margin-top:4rem;
&::after{
    content: "";
  position: absolute;
  bottom: 0;
  left: 45%;
  height: 0.2rem;
  width: 10%;
  background-color:${({show})=>(
    show ? '#fff' : '#FFC0CB'
)};
  }

  @media screen  and (max-width:375px){
    margin-top:1rem;
      
  }


`
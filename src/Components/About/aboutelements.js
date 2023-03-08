import styled from 'styled-components'




export const Cover = styled.div`

grid-column: center-start / center-end;
transition: all 0.7s ease-in-out;

padding:1vh;
background-color:${({show})=>(
    show ? '#FFC0CB' : '#fff'
)} ;

`


export const Tag = styled.div`


box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 1.2s ease-in-out;

width:15rem;
padding:2vh;
border-radius:1rem;
text-align:center;

transform : rotate(${({show})=>(
    show ? '0deg' : '-40deg'
)});
background-color:${({show})=>(
    show ? '#fff' : '#FFC0CB'
)} ;


`


export const Text1 = styled.p`

font-size: calc(1.4rem + 1vw);
color:#fff;
transition: all 1.2s ease-in-out;
color:${({show})=>(
    show ? '#FFC0CB' : '#fff'
)} ;


`


export const Text = styled.p`
margin-top:1rem;
font-size: calc(1.9rem + 1vw);

transition: all 1.8s ease-in-out;
color:${({show})=>(
    show ? '#fff' : '#FFC0CB'
)} ;
opacity:${({show})=>(
    show ? '1' : '0'
)} ;

`



export const Cakes = styled.div`

width:80%;


text-align:center;
margin:auto;
`

export const Ode = styled.p`
  transition: all 1.8s ease-in-out;
font-size: calc(1rem + 1vw);
margin-top:1rem;
color:${({show})=>(
    show ? '#fff' : '#FFC0CB'
)} ;
opacity:${({show})=>(
    show ? '1' : '0'
)} ;

`

export const Place = styled.div`

grid-column: center-end/ container-end;
background-color:${({show})=>(
    show ? '#FFC0CB' : '#fff'
)} ;

transition: all 0.7s ease-in-out;
`


export const Place1 = styled.div`

grid-column: container-start / center-start;
background-color:${({show})=>(
    show ? '#FFC0CB' : '#fff'
)} ;

transition: all 0.7s ease-in-out;
`
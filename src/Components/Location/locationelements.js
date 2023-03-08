import styled from 'styled-components'
import {TiLocation} from 'react-icons/ti'
import {GiStairsCake} from 'react-icons/gi'



export const Cover = styled.div`

background:red;
padding:2vh;
margin-top:4rem;

background:#FFC0CB;


`



export const Card = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:30rem;
width:18rem;
border-radius:2rem;
background:#fff;
position: relative;
transform-style: preserve-3d;
  transform: rotateX(60deg) scale(1) translate(-30px,250px);
transition:all 1s ease-in-out;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
border:2px solid #FFC0CB;

@media screen and (max-width:375px){
    justify-content:flex-end;
    margin-left:5rem;
}
@media screen and (max-width:414px){
    justify-content:flex-end;
    margin-left:4rem;
}

@media screen and (max-width:768px){
    justify-content:flex-end;
    margin-left:4rem;
}
@media screen and (max-width:1024px){
    justify-content:flex-end;
    margin-left:4rem;
}
@media screen and (min-width:1024px){
    justify-content:flex-end;
    margin-left:4rem;
}
`


export const Over= styled.div`
background:green;
height:50%;
width:100%;
display:flex;
justify-content:center;
align-items:flex-end;
perspective: 80rem;

@media screen and (max-width:375px){
    justify-content:flex-end;
    margin-right:5rem;
}
`

export const Pin = styled(TiLocation)`
font-size: calc(3rem + 3vw);

color:#fff;
transition:all 0.5s ease-in-out;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
border:2px solid #fff;
position:absolute;
top:1.5rem;;
left:0;
z-index:3;

`

export const Cake = styled(GiStairsCake)`
font-size: calc(3rem + 3vw);

color:#fff;
transition:all 0.5s ease-in-out;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
border:2px solid #fff;

position:absolute;
top:1.5rem;;
right:0;
z-index:3;


`

export const Hold = styled.div`

grid-column:col-start 2 / col-start 10;

position:relative;

padding:2vh;

text-align:center;
background:#FFC0CB;
`

export const Text=styled.p`

font-size: calc(1.9rem + 1vw);
color:#fff;
`

export const Space = styled.div`
grid-column:container-start / col-start 2 ;
background:#FFC0CB;

`
export const Space1 = styled.div`
grid-column: col-start 10 / container-end;
background:#FFC0CB;

`
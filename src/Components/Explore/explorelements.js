import styled ,{keyframes} from 'styled-components'



export const Tab = styled.div`

grid-column: col-start 5 / col-start 7;

padding:2vh;
background-color:${({turn})=>(
    turn ? '#FFC0CB' : '#fff'
)} ;
transition: all 0.7s ease-in-out;
`
const move = keyframes`

0%{
transform:translateX(-200%);
}
100%{
    transform:translateX(0);
}

`


export const Button = styled.div`
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  border-radius:1rem;
  width:15rem;
padding:1.2vh;
margin-top:1rem;
cursor: pointer;

border: 2px solid #fff;

animation: ${move} 2s;

text-align:center;

&:hover{
    border: 3px solid #FFC0CB;
    background:#fff;
  
}

`


export const Text1= styled.div`

font-size: calc(1.3rem + 1vw);
color:#fff;

transition: all 0.3s ease-in-out;

&:hover{
    color:#FFC0CB
}
`


export const Space = styled.div`

grid-column:container-start / col-start 5;

background-color:${({turn})=>(
    turn ? '#FFC0CB' : '#fff'
)} ;

transition: all 0.7s ease-in-out;

`

export const Space1 = styled.div`

grid-column:col-start 7 / container-end;

background-color:${({turn})=>(
    turn ? '#FFC0CB' : '#fff'
)} ;

transition: all 0.7s ease-in-out;

`
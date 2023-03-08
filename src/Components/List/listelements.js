import styled from 'styled-components'


export const Section= styled.div`

grid-column:center-start / center-end;
background: ${({show})=>(
    show ? '#FFC0CB' : '#fff'
)};

transition:0.8s all ease-in-out;
`

export const Container = styled.div`


display:grid;
grid-template-columns: repeat(auto-fit,18rem);
grid-gap:3rem;


color:white;

padding:1vh;
place-content:center;

`

export const CardFront = styled.div`
position: absolute;
top:0;
left:0;
width:100%;
height:100%;
transition: all 1s ease-in-out;
padding:3rem;
transform: perspective(100rem);
backface-visibility: hidden;
background-repeat:no-repeat;
background-size:cover;
background-position:right;

background:url(${props=>props.img})
`


export const CardBack = styled.div`

position: absolute;
top:0;
left:0;
width:100%;
height:100%;
transition: all 1s ease-in-out;
padding:3rem;
transform: perspective(100rem);
transform: perspective(100rem) rotateY(0.5turn);
backface-visibility: hidden;
display:flex;
justify-content:center;
align-items:center;
background-color:#fff;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
border-radius:2rem;
border:2px solid #FA016D;
color:#FA016D;

`



export const Box = styled.div`
cursor: pointer;
height:30rem;
width:18rem;

position: relative;
transition:1s all ease-in-out;

&:hover ${CardFront}{
    
    transform:perspective(100rem) rotateY(0.5turn);
  

}

&:hover ${CardBack}{
    transform: perspective(100rem) rotateY(1turn);
 
}


`    


export const Box1 = styled.div`
transition:1s all ease-in-out;
cursor: pointer;
height:30rem;
width:18rem;

position: relative;
transform:translate(${({show})=>(
    show ? '0,0' : '-90px,87px'
)});
/* transform:translate(); */
&:hover ${CardFront}{
    
    transform:perspective(100rem) rotateY(0.5turn);
  

}

&:hover ${CardBack}{
    transform: perspective(100rem) rotateY(1turn);
 
}



`    


export const Text=styled.p`

font-size: calc(1.9rem + 1vw);

`



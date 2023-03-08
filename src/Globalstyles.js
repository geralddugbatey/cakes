import {createGlobalStyle} from 'styled-components'

const Globalstyle = createGlobalStyle`
*,*::before,*::after{
   -webkit-tap-highlight-color:transparent;
   margin:0;
   padding:0;
   box-sizing:border-box;
   
}
::selection{
    color: #5d2e46;
    background: white;
}

p,h1{
    color:#FA016D;
}

div{
    color:#FA016D;
}
`

export default Globalstyle
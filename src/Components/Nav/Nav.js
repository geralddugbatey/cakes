import React, {useState} from 'react'
import {Header,Cherry,Div,Div1,H1} from './navelements'
import './nav.css'
const Nav = () => {


    const [open, setopen] = useState(false)
    const [text, settext] = useState('Cherry Top')

    const toggle=()=>{
        if(window.scrollY>=200){
            setopen(true)
            settext('')
        }
        else{
            setopen(false)
            settext('Cherry Top')
        }
    }

    window.addEventListener('scroll',toggle)
    return (
        <>
        <Header open={open}>
            <Div>
            <Cherry open={open}/>
    <H1 className="h1" open={open}>{text}</H1> 
            </Div>

        </Header>
       

 
        </>
    )
}

export default Nav

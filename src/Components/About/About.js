import React, { useState } from 'react'
import {Cover,Text,Tag,Cakes,Ode,Place1,Place,Text1} from './aboutelements'
import './about.css'
const About = () => {

    const [show, setshow] = useState(false)

const toggle=()=>{
    if(window.scrollY>355){
        setshow(true)
    }
}

    window.addEventListener('scroll',toggle)

    return (
        <>
        <Place1 show={show} ></Place1>
        <Cover show={show}>
            <Tag show={show}>
                <Text1 show={show} className="text1" >Our Aim</Text1>
            </Tag>
            <Cakes>
                <Text show={show} className="text" >Cherry Top</Text>
                <Ode show={show} className="text1">
Cake and Art got married on this page😉 

</Ode>
                </Cakes>
        </Cover>
        <Place show={show}></Place>
        </>
    )
}

export default About

import React ,{useState} from 'react'
import {Heading,D} from './titlelements'
import '../About/about.css'
const Title = () => {
    const [show, setshow] = useState(false)

    const toggle=()=>{
        if(window.scrollY>355){
            setshow(true)
        }
    }
    
        window.addEventListener('scroll',toggle)
    return (
        
        <>
        <D show={show}>
            <Heading show={show} className="text" >
Catalog
            </Heading>
        </D>
            
        </>
    )
}

export default Title

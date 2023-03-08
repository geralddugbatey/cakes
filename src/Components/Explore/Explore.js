import React, { useState } from 'react'
import {Tab,Button,Text1,Space,Space1} from './explorelements'
import '../About/aboutelements'
const Explore = () => {
    const [turn, setturn] = useState(false)




window.addEventListener('scroll',()=>{
    if(window.scrollY>864){
        setturn(true)
    }
})


    return (
        <>
        <Space turn={turn}></Space>
        <Tab turn={turn}>
            <Button turn={turn}>
                <Text1 className="text">Explore</Text1>

            </Button>
        </Tab>
        <Space1 turn={turn}></Space1>
        </>
    )
}

export default Explore

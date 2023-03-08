import React from "react";
import { Container, Div1,Show,SliderShow,Slide
,Box,Candles,Label,H1

} from "./homelements";
import { useState ,useEffect,useRef} from "react";

import './home.css'

const Home = ({ img1, img2, img3, img4, img5 }) => {
  
  const arr = [img1, img2, img3, img4, img5];

  const [index, setindex] = useState(0)
  const [show, setshow] = useState(false)

    const timeout = useRef(null)


    function reset(){
        if(timeout.current){
            clearTimeout(timeout.current)
        }
    }

    const toggle=()=>{
        if(window.scrollY>425){
            setshow(true)
        }
    }
    
        window.addEventListener('scroll',toggle)
    

    // useEffect(() => {
    //     reset()
    //    timeout.current= setTimeout(()=>(
    //         setindex((prevIndex)=>prevIndex === arr.length - 1 ? 0 : prevIndex + 1)
    //     ),3000)
        
    //     return () => {reset()}
    // }, [index])


  return (
    <Container show={show}>
      <Div1></Div1>
      <Show>
          {/* <Label>
              <H1 className="head">Cherry Top</H1>
          </Label> */}

        <SliderShow index={index}>
            {
                arr.map((i,index)=>(
                    <Slide key={index} img={i}></Slide>
                ))
            }
   
        </SliderShow>

        <Box>
            {
                arr.map((i,indx)=>(
                    <Candles onClick={()=>{
                        setindex(indx)
                    }} />
                ))
            }
        </Box>

      </Show>
    
    </Container>
  );
};

export default Home;

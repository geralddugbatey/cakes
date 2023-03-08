import React from "react";
import { Card ,Cover, Over,Pin,Hold,Cake,Text,Space1,Space} from "./locationelements";
import '../About/about.css'
const Location = () => {
  return (
      <>
      <Space></Space>
<Hold>
<Pin/>  
<Cover>
<Text className="text">Pra River St</Text>
{/* <Text className="text">MPs Flat</Text> */}
<Text className="text">Accra</Text>

</Cover>

<Cake/>
            </Hold>

            <Space1></Space1>
   
    </>
  );
};

export default Location;

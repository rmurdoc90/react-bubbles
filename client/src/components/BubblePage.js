import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  
  useEffect(()=>{
    getData()
  },[])

  const getData = () =>{
    axiosWithAuth()
    .get('/api/colors')
    .then(res=>{
      setColorList(res.data)
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

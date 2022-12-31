import { Box, Image,Text,Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Men = () => {
  // const dispatch = useDispatch();
  const [womens,setwomens]=useState([])
  const [womensData,setwomensData]=useState([])
  const loading=useSelector((store)=>store.loading)
  const products=useSelector((store)=>store.data)
  const error=useSelector((store)=>store.error)
  useEffect(() => { 
    fetchData();
  }, [])

  useEffect(() => { 
    const womensWear = womensData?.filter((element) => { 
      return element.category == "womens";
    })
    console.log("womensWear",womensWear)
    setwomens(womensWear)
  },[womensData.length])
  const fetchData = async () => {  
    const response = await fetch(`http://localhost:8080/products`)
    let res = await response.json();
    console.log(response);
    console.log(res);
    setwomensData(res)
  }
  console.log("womens",womens);
  console.log("products",products);
  return (
    <Flex w={ "100%"} gap={ "5%"} position={"relative"} top={ "100px"} border={"4px solid red"} flexWrap={"wrap"}>
      {
        loading ? <h1>Data is loading</h1> : error ? <h1>Something went wrong,try again</h1> :
          womens?.map((element) => { 
            return (
              <Box key={element.id} w={ "20%"}>
                <Box h={ "250px"}><Image w={"100%"} h={ "100%"} src={element.image}></Image></Box>
                <Box>
                <Text>{element.title }</Text>
                <Text>{element.price }</Text>
                </Box>
              </Box>
            )
          })
      }
   </Flex>
  )
  
}

export default Men
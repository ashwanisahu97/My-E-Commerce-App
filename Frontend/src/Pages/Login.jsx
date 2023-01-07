import { Box, Button, Checkbox, Flex, FormControl, FormLabel, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Box  boxShadow={'lg'} rounded={'lg'} borderRadius="10px" w={["full", "md"]} mx={"auto"} position="relative" top={'120px'} p={"10px"} >
 
        <Heading  mb="25px" textAlign={"center"}> Login to your account</Heading>
   
      <Flex flexDirection={"column"}>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" isRequired/>
          <FormLabel mt="10px">Password</FormLabel>
          <Input type="password" isRequired/>
          </FormControl>
          <Flex mt="10px" justifyContent={"space-between"}>
          <Checkbox defaultChecked>Remember me</Checkbox>
             <Button>Forgot your password?</Button>
          </Flex>
          <Button  mt="20px" type={ "submit"}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
           
      </Flex>
   </Box>
  )
}

export default Login
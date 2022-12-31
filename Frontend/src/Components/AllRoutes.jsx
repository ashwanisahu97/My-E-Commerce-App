import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Homepage from '../Pages/Homepage'
import Electronics from '../Pages/Electronics'
import Jewelery from '../Pages/Jewelery'

const AllRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={ <Homepage/>}></Route>
          <Route path="/men" element={ <Men/>}></Route>
          <Route path="/women" element={ <Women/>}></Route>
          <Route path="/electronics" element={ <Electronics/>}></Route>
          <Route path="/jewelery" element={ <Jewelery/>}></Route>
          <Route path="/login" element={ <Login/>}></Route>
          <Route path="/signup" element={ <Signup/>}></Route>
   </Routes>
  )
}

export default AllRoutes
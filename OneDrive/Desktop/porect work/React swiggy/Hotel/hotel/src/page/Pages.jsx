import React from 'react'

import { Home } from './Home'
import {Route,Routes} from "react-router-dom"
import Cusines from './Cusines'
import  Search  from './Search'

export const Pages = () => {
  return (
  
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path='/cusines/:type' element={<Cusines/>}/>
<Route path='/search/:type_name' element={<Search/>}/>
      </Routes>
  
  )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRouters from '../HigherOrderComponents/PrivateRouters'
import EditMusicRecord from './EditMusicRecord'
import HomePage from './HomePage'
import Login from './Login'
import SingleMusicRecord from './SingleMusicRecord'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/music/:id" element={
              <PrivateRouters>
            <SingleMusicRecord/>
            </PrivateRouters>
            } ></Route>
            <Route path="/music/:id/edit" element={
              <PrivateRouters>
            <EditMusicRecord/>
            </PrivateRouters>
            } ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="*" element={<h3>Page Not Found</h3>} ></Route>
          
        </Routes>


    </div>
  )
}

export default MainRoutes
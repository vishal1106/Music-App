import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouters = ({children}) => {
 const location =useLocation()
  const isAuth=useSelector((store)=>store.AuthReducer.isAuth)
   
  if (!isAuth) {
    return <Navigate to="/login" state={{from:location}} replace/>;
  }

  return children;


}

export default PrivateRouters
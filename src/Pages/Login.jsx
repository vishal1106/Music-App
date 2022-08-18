import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { login } from '../Redux/AuthReducer/action'

const Login = () => {
  
  const [form,setForm]=useState({
    email:"",
    password:""
  })
  const [formdata,setFormdata]=useState({})
  const dispatch=useDispatch();
  const navigate=useNavigate()
const u = "LOGIN_SUCCESS";
const location=useLocation()
const comingfrom=location.state?.from?.pathname || "/"

  const onchnagehandle=(e)=>{
    const {name,value}=e.target
    setForm({
      ...form,
      [name]:value
     })
  }


  const submithandle=(e)=>{
    e.preventDefault();
  setFormdata(form)
dispatch(login(formdata)).then((r)=>{
  if(r.type===u)
  {
   
  navigate(comingfrom,{replace:true})
  }
})

  }


  
  return (
    <div>
     <div style={{display:"flex",justifyContent:"center",marginTop:"50px",flexDirection:"column",gap:"20px"}}>
      <h1>Login</h1>
     <form onSubmit={submithandle}>
        <div>
          <label >Email: </label>
          <input type="email" placeholder='email'name="email" onChange={onchnagehandle} />
        </div>
        <br />
        <div>
          <label >password: </label>
          <input type="password" placeholder='password'name="password" onChange={onchnagehandle}/>
        </div>
        <br />
        <div>
        
          <input type="submit" />
        </div>
      </form>
     </div>
    </div>
  )
}

export default Login
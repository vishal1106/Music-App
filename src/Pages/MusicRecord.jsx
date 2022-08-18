import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {GetMusicRecord} from "../Redux/action"
import { login } from '../Redux/AuthReducer/action'
const MusicRecord = () => {
 const dispatch=useDispatch()

 const album=useSelector((store)=>store.reducer.data)


 useEffect(()=>{
 dispatch(GetMusicRecord())

 },[])
 
    return (
    <div>
      <h1>MusicRecord</h1>
      <hr />
     <div style={{display:"grid",
   gridTemplateColumns:"repeat(3, 1fr)",
   gap:"20px",
   
    
    }}>
     {
        album && album.map((el)=>{
        
          return <div key={el.id} style={{border:"1px solid red"}}>
           <Link to ={`/music/${el.id}`}>
            <h2>{el.name}</h2>
           <img src={el.img} alt="" />
           <h3>{el.genre}</h3>
           <p>{el.year}</p>
           </Link>
          </div>
          
        })
      }
     </div>
    </div>
  )
}

export default MusicRecord
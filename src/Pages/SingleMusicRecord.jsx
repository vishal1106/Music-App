import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { GetMusicRecord } from '../Redux/action'
const SingleMusicRecord = () => {
  const [newdata,setNewdata]=useState({})
  const dispatch=useDispatch()
  const {id}=useParams()
  const MusicRecord=useSelector((store)=>store.reducer.data)


useEffect(()=>{
  if(MusicRecord.length===0)
  {

    dispatch(GetMusicRecord())
  }
 
},[])

useEffect(()=>{
if(id)
{
  
  const current=MusicRecord.find((el)=>id===el.id);
 
  current && setNewdata(current)
}
},[id,MusicRecord])

  return (
    <div>
      <h1>SingleMusicRecord</h1>
      <br />
      <div>
        {
           newdata &&
            <div>
              <h2>{newdata.name}</h2>
           <img src={newdata.img} alt="" />
           <h3>{newdata.genre}</h3>
           <p>{newdata.year}</p>
            </div>
           

        }
      </div>
      <Link to={`/music/${id}/edit`}>Edit</Link>
    </div>
  )
}

export default SingleMusicRecord
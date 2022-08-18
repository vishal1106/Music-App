import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { GetMusicRecord ,UpdatedMusicRecord} from '../Redux/action'

const EditMusicRecord = () => {
  const [name,setName]=useState("")
  const [artist,setArtist]=useState("")
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

 if(current)
 {
setName(current.name)
setArtist(current.artist)
 }
  
}
},[id,MusicRecord])

const handleclick=()=>{
  if(name && artist)
  {
    const payload={
      name:name,
      artist:artist
    }
 
 dispatch(UpdatedMusicRecord(id,payload)).then((res)=>{
  dispatch(GetMusicRecord())
 })
  }
}
  return (
    <div>
      <h1>EditMusicRecord</h1>
      <br />
      <div>
        <label >Name : </label>
        <input type="text" name="name" value={name} placeholder='Enter the New name'  onChange={(e)=>setName(e.target.value)} />
      </div>
      <div>
        <label >Artist : </label>
        <input type="text" name="artist" value={artist} placeholder='Enter the New name' onChange={(e)=>setArtist(e.target.value)}/>
      </div>
      <br />
      <div>
        <button onClick={handleclick}>UPDATED</button>
      </div>
      <br />
      <div>
     <Link to="/"> Back</Link>
      </div>
    </div>
  )
}

export default EditMusicRecord
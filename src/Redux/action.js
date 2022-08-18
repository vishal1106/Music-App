import * as types from "./actionType"
import axios from "axios";

const LoaddingMusicRecord=()=>{
  return{
    type:types.GET_MUSIC_LOADDING
  }
}




const GetMusicRecord=()=>(dispatch)=>{
    dispatch(LoaddingMusicRecord())
   return axios.get("  http://localhost:8080/albums").
    then((res)=>{
      dispatch({
        type:types.GET_MUSIC_SUCCESS,
        payload:res.data
      })
    }).catch(()=>{
       return  dispatch({
             type:types.GET_MUSIC_ERROR
        })
    })
}

const UpdatedMusicRecord=(id,payload)=>(dispatch)=>{
  
  dispatch({type:types.EDIT_MUSIC_LOADDING})
 return axios.patch(`http://localhost:8080/albums/${id}`,payload).
then((res)=>{
dispatch({type:types.EDIT_MUSIC_SUCCESS})
}).catch(()=>{
  dispatch({type:types.EDIT_MUSIC_ERROR})
})
}
export {
    GetMusicRecord,UpdatedMusicRecord
}
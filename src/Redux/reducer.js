import * as types from "./actionType"

const initial={
    isloading:false,
    isSuccess:false,
    isError:false,
    data:[]
}

const reducer=(state=initial,action)=>{
    const {type,payload}=action;
   
    switch(type){
       case types.GET_MUSIC_LOADDING :{
        return{
            ...state,
            isloading:true,
            isSuccess:false,
            isError:false,
        }
       }
       case types.GET_MUSIC_SUCCESS:{
        return{
            ...state,
            isloading:false,
            isSuccess:true,
            isError:false,
            data:payload
        }
       }
       case types.GET_MUSIC_ERROR:{
        return{
              ...state,
              isloading:false,
              isSuccess:false,
              isError:true,
        }
       }
       
       default:{
        return state
       }
    }
}
export default reducer;
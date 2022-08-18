import React from 'react'
import FilterSort from '../Componet/FilterSort'
import MusicRecord from './MusicRecord'

const HomePage = () => {
  return (
    <div>
        <div style={{display:"flex",width:"100%",margin:"auto",border:"1px solid"}}>
        <div style={{border:"1px solid",width:"20%"}}>
          <FilterSort/>
          </div>
        <div style={{border:"1px solid", width:"80%",
      
      
      
      }}>
          <MusicRecord/>
          </div>
        </div>
    </div>
  )
}

export default HomePage
import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",
                  textAlign:"center",gap:"25px",borderBottom:"1px solid #EEF2F5",
                  padding:"10px 5px"}}>
          
          <Link to="/dashboard">
              <button style={{cursor:"pointer"}} >Dashboard</button>
          </Link> 
          <Link to="/bookview">
              <button style={{cursor:"pointer"}} >Bookview</button>
          </Link>
          <Link to="/timetable">
              <button style={{cursor:"pointer"}} >Timetable</button>
          </Link>
          <Link to="/click">
              <button style={{cursor:"pointer"}} >Click</button>
          </Link>
      </div>   
    </div>
  )
}

export default Home
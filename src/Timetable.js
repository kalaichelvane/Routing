import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'

function Timetable() {
  return (
    <div>
      <Home />
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}}>
        Timetable Page <br /><br />
        <Link to="/">
            <button>Back</button>
        </Link>
    </div>
    </div>
  )
}

export default Timetable
import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'

function Dashboard() {
  return (
    <div>
    <Home />
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}}>
      
        Dashboard Page <br />< br />
        <Link to="/">
        <button>back</button>
        </Link>
    </div>
    </div>
  )
}

export default Dashboard
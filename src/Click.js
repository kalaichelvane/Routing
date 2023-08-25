import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Home from './Home';
// import Home from './Home';
// import Home from './Home'

function Click() {

    const [click,setClick] = useState(false);
    const [push,setPush] = useState(false);

  return (
    <div>
      <Home />
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}}>
        
        Click Page
    
      
      <div style={{marginTop:"20px"}}>
      </div>

        <div>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Click
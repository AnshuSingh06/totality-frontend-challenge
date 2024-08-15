import React from 'react'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const PNavbaruser = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a  className="navbar-brand p-0" >
                
            <img src="./images/logo.jpg" alt="Logo"
               style={{width:"30%"}}/> 
            </a>
            
            <div className="navbar-collapse collapse show" id="navbarCollapse" >
                <div className="navbar-nav ms-auto py-0">
                   <Link to='/userhome/:userId' className="nav-item nav-link">Home</Link>
                  
                   <Link to='/' className="nav-item nav-link">Logout</Link>
                   
            
           
                    
                </div>
               
            </div>
        </nav>
        <br/>
   
    </div>
   
  )
}

export default PNavbaruser

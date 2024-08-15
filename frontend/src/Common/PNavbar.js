import React from 'react'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const PNavbar = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a  className="navbar-brand p-0" >
                
            <img src="./images/logo.jpg" alt="Logo"
               style={{width:"30%"}}/> 
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarCollapse" aria-expanded="true">
               
            </button>
            <div className="navbar-collapse collapse show" id="navbarCollapse" >
                <div className="navbar-nav ms-auto py-0">
                   <Link to='/' className="nav-item nav-link">Home</Link>
                   <NavDropdown title="Register" id="basic-nav-dropdown">
                   <Link to='/userlog' className="nav-item nav-link">Login</Link>
                   <Link to='/userreg' className="nav-item nav-link">SignUp</Link>
            
            </NavDropdown>
                    
                </div>
               
            </div>
        </nav>
        <br/>
   
    </div>
   
  )
}

export default PNavbar

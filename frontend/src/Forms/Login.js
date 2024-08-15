import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { useNavigate, Link } from 'react-router-dom';
import PNavbar from '../Common/PNavbar';
import PFooteruser from '../Common/PFooteruser';
import Header from '../Common/Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:7000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserEmail: email,
          UserPassword: password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // alert('Login successful!');
        if (data.user && data.user.id) {
          navigate(`/userhome/${data.user.id}`); // Redirect to /userhome with user ID
        } else {
          alert('User ID not found in the response.');
        }
      } else {
        alert(data.message || 'Login failed!');
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert('Login failed due to server error.');
    }
  };
  
  
  return (
    <>
    <Header data="Login"/>
    <PNavbar/>
    <MDBContainer className='my-5'>
      <MDBCard>
        <MDBRow className='g-0 d-flex align-items-center'>
          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>
            <MDBCardBody>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass='mb-4'
                  label='Email address'
                  id='form1'
                  type='email'
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Password'
                  id='form2'
                  type='password'
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />

                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  
                </div>

                <MDBBtn className="mb-4 w-100" type="submit">Sign in</MDBBtn>
               
                <p className="text-center">
                Not registered? <Link to="/userreg">Register here</Link>
            </p>
              </form>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
    <br/>
    <PFooteruser/>
    </>
  );
};

export default Login;

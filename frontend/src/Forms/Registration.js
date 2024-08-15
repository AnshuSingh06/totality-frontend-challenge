import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import { useNavigate, Link } from 'react-router-dom';
import PNavbar from '../Common/PNavbar';
import PFooteruser from '../Common/PFooteruser';
import Header from '../Common/Header';
import '../CSS/Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    repeatPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://localhost:7000/api/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserName: formData.name,
          UserEmail: formData.email,
          UserMobile: formData.mobile,
          UserPassword: formData.password,
        }),
      });

      if (response.ok) {
        alert('Registration successful!');
        navigate('/userlog'); // Redirect to login on successful registration
      } else {
        alert('Registration failed!');
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      mobile: '',
      password: '',
      repeatPassword: ''
    });
  };

  return (
    <>
      <Header data="Registration" />
      <PNavbar />
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
            <form onSubmit={handleSubmit}>
              <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='name' type='text' value={formData.name} onChange={handleChange} required />
              <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='email' type='email' value={formData.email} onChange={handleChange} required />
              <MDBInput wrapperClass='mb-4' label='Mobile Number' size='lg' id='mobile' type='text' value={formData.mobile} onChange={handleChange} required />
              <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='password' type='password' value={formData.password} onChange={handleChange} required />
              <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='repeatPassword' type='password' value={formData.repeatPassword} onChange={handleChange} required />
              
              <div className="d-flex justify-content-between">
                <MDBBtn className='mb-4 w-45 gradient-custom-4' size='lg' type="submit">Register</MDBBtn>
                <MDBBtn className='mb-4 w-45' size='lg' type="button" color="secondary" onClick={handleReset}>Reset</MDBBtn>
              </div>
            </form>
            <p className="text-center">
              Already registered? <Link to="/userlog">Login</Link>
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <br />
      <PFooteruser />
    </>
  );
}

export default Registration;

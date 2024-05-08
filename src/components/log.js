// import React from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { Google } from '@mui/icons-material'; // Import Google icon from Material-UI

// function Log() {
//   const handleSignUpClick = () => {
//     // Open a new window for sign up
//     window.open('YOUR_SIGNUP_URL', '_blank');
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <div style={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: '20px', maxWidth: '400px', width: '100%' }}>
//         <Form>
//           <Form.Group className="mb-3" controlId="formBasicName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="text" placeholder="Enter your Name" />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control type="email" placeholder="Enter your Email" />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Log In
//           </Button>
//         </Form>

//         <div className="mt-3">
//           <Button variant="light" onClick={() => handleSignUpClick()}>
//             New to Magicbricks? <span style={{ color: 'red' }}>Sign Up</span>
//           </Button>
//         </div>

//         <div className="mt-3">
//           <Button variant="outline-primary">
//             <Google /> Log in with Google
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Log;


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

 
function  Log() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3002/Login", { email, password })
          .then(result => {
            if (result.data === "success") {
              navigate("/Home");
            } else {
              setError("Invalid email or password. Please try again.");
            }
          })
          .catch(error => {
            console.error("Error:", error);
            setError("An error occurred. Please try again later.");
          });
      }

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{ zIndex: 1020,marginTop:'0px'}}>
                <Container fluid className='navColor' style={{height:'50px'}}>
                    <Navbar.Brand href="#home" className='text-white' style={{ marginLeft: '30px' }}>
                        <img src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg" width="160" alt="logo" />
                    </Navbar.Brand>
                    </Container>
                    </Navbar>
    <div className='d-flex justify-content-center align-items-center  mb-4' style={{marginTop:'10rem'}}>
    <Card style={{ width: '25rem' ,height:'85vh',border:'1px solid lightgray',backgroundColor:'ffff' }}>
    {error && <div className="alert alert-danger" role="alert">{error}</div>}

    <Form onSubmit={handleSubmit}>
        <div className='px-4'>
        <p  className='fs-5'>Login</p>
        
       
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  
         name="userEmail"
         value={email}
         onChange={e => setEmail(e.target.value)}
         placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3"  >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  
         name="userPassword"
         value={password}
         onChange={e => setPassword(e.target.value)}
         placeholder="Email" />
      </Form.Group>
 
      <Form.Group className="mb-3 " controlId="formBasicCheckbox" style={{fontSize:'12px'}}>
          <Form.Check type="checkbox" label="I agree to Magicbricks T&C, Privacy Policy, & Cookie Policy"  />
        </Form.Group>
    
      <Button  type='submit'  variant='danger' style={{borderColor:'red'  ,width:'80%'}} className='mx-2'>
            Continue
                </Button>
                <Form.Group className="mb-3  mt-2 d-flex justify-content-center "   >
          <Form.Text> New To magicbricks?</Form.Text> 
          <Link to='/Signup' style={{color:'red'}}>SignUp</Link>
        </Form.Group> 
      </div>
    </Form>
    </Card>
    </div>
    </>
  );
}

export default Log;




 







 






  
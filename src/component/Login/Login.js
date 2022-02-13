import React from 'react';
import { Form, Button, Nav,Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './Login.css';

const Login = () => {
    return (
        <div className='cont1'>
            <div text-center>
                <h1>SignIn</h1>
               
                    <Form.Floating className="mb-3 mt-4">
                      <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                      />
                     <label htmlFor="floatingInputCustom">Email address</label>
                    </Form.Floating>
                <Form.Floating>
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="password"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPasswordCustom">Password</label>
                </Form.Floating>

                <div className='log'>
                         <div text-center> 
                           
                            <Form.Group as={Col} controlId="formGridStatus">
                            
                            <Form.Label></Form.Label>
                            <Form.Floating>
                            <Form.Select defaultValue="Choose...">
                            <label htmlFor="floatingPasswordCustom"></label>
                                <option>Select</option>
                                <option>Admin Login</option>
                                <option>User Login</option>
                                
                   
                            </Form.Select>
                            
                            </Form.Floating>
                           
                    </Form.Group>
                
               
                </div>
                </div>
                
                
                <div className='text center'>
                <div>
                    <Nav>
                    <Button className='mt-5 btnc'>
                        <NavLink to={"/Unavigation"}>Log in</NavLink> 
                    </Button>
                    </Nav>
                </div>
                </div>

                
               
                <div className='text-sm text-muted'>don't have an account?</div>
                
               
                <Nav className='justify-content-center'>
                <NavLink to={"/AdminRegistration"}>AdminRegistration</NavLink>

                </Nav>
                <Nav className='justify-content-center'>
                <NavLink to={"/UserRegistration"}>UserRegistration</NavLink>

                </Nav>

                </div>
               
             </div>
                

            
        
    );
}

export default Login;

import React from 'react';
import { Form, Button, Row, Col, Nav } from 'react-bootstrap';

import './Aregistration.css';

const Aregistration = () => {
  return (
    <div className='cont5'>
      <div text-center>
        <h1> Admin Registration</h1>
        <Form>
          <Row className="mb-3">

            <Form.Group as={Col} controlId="formGridname">
              <Form.Label>Name</Form.Label>
              <Form.Control size='sm' required type="name" placeholder="Enter User Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridcontactnumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control size='sm' required placeholder="Ex.98xxxxxxx5 [10 digit]" />
            </Form.Group>
            
            </Row>

             <Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control size='sm' required type="email" placeholder="john@gmail.com" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control size='sm' type="password" placeholder="Password" />
            </Form.Group>
            </Row>

            

            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control size='sm' placeholder="Main St or Area" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control size='sm' placeholder='Ex.Pune' />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control size='sm' />
              </Form.Group>
            </Row>
          




         
            
         
        </Form>

        <div className='text-center'>
          <Button variant="primary" type="register" style={{width:'100px'}}>
            Register
          </Button>
        </div>



        {/* <div className='text-center'> */}
        <div className='text-sm text-muted text-center'>Already an user?<a href=''>Sign in</a> </div>
        {/* <Nav>
                   <Nav.Link href="#deets" className='nl'>Sign in</Nav.Link>
                   
                
                 
                </Nav> */}
      </div>
    </div>






  )

}

export default Aregistration;
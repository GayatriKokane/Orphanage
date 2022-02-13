import React from 'react';
import { Navbar,Container,Card,Button, Col } from 'react-bootstrap';
import './Unavigation.css';

const Unavigation=()=>{
    return(
    <div>
            <Navbar>
            <Container>
               <Navbar.Brand  href="#home">Welcome to Mission Of Hope</Navbar.Brand>
            </Container>
            </Navbar>

<Container>
               
    <div className="row">
            <Col>
              <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src="https://s3.envato.com/files/b724c08a-7375-42fa-922b-a70dd9951050/inline_image_preview.jpg" />
                <Card.Body>
                    <Card.Title>Adoption</Card.Title>
                    <Card.Text>
                    “We do not need to know the beginning of a child’s story to change the ending.”
                    </Card.Text>
                    <Button variant="primary">Adopt Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col >
              <Card style={{ width: '25rem'}}>
                <Card.Img variant="top" src="https://www.thespruce.com/thmb/bUonOuEXx4lSe7w8djXFwJ8_Puc=/4495x2528/smart/filters:no_upscale()/where-to-donate-everything-in-home-2648117_02-f88c1f8b70324c709dfbd8df9db217c0.jpg" />
                <Card.Body>
                    <Card.Title>Donation</Card.Title>
                    <Card.Text>
                    Help others without any reason and give without the expectation of receiving anything in return.
                    </Card.Text>
                    <Button variant="primary">Donate Now</Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col>
              <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src="https://www.crmsoftwareapp.com/blog/blog-image/lumin-header.png" />
                <Card.Body>
                    <Card.Title>Appointment</Card.Title>
                    <Card.Text>
                    Kids don't want expensive stuff.They want love from the society. 
                    Visit Orphanage and be the reason of someone's smile.
                    </Card.Text>
                    <Button variant="primary">Make an Appointment</Button>
                </Card.Body>
              </Card>
            </Col>
    </div>
            
    <div className="row">
        
            <Col >
              <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/02/32/70/09/360_F_232700989_v0MvYgLgBwBCwDgv5lcS89sjw5dJ58Kr.jpg" />
                <Card.Body>
                    <Card.Title>We Need Things</Card.Title>
                    <Card.Text>
                    Don't waste..It may be plenty for you, But for somebody it may be empty too..
                    </Card.Text>
                    <Button variant="primary">Check</Button>
                </Card.Body>
              </Card>
            </Col>
              
                
            <Col>
              <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/6e/36/16/6e3616f41bcc9a691b3dae4e00e6c51e.jpg"/>
                <Card.Body>
                    <Card.Title>Gallery</Card.Title>
                    <Card.Text>
                   "Each Happiness of yesterday is memory for tomorrrow". 
                    </Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
              </Card>
            </Col>
           

            <Col>
               <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/feedback-concept-image-arrows-blue-chalkboard-background-40378284.jpg" />
                <Card.Body>
                    <Card.Title>Feedback</Card.Title>
                    <Card.Text>
                    “The best is yet to be.” We all need people who will give us feedback.
                    </Card.Text>
                    <Button variant="primary">Give Feedback</Button>
                </Card.Body>
              </Card>
            </Col>
    </div>

    </Container>

        

        

    </div>
    );
}

    export default Unavigation;
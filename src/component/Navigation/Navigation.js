import React from 'react';
import {Button,Nav,Form,NavDropdown,Navbar,Container} from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation=()=>{
    return(
    <div >
          <Navbar collapseOnSelect expand="lg"  fixed='top'>
              <Container fluid>
              <img src="https://previews.123rf.com/images/vectorgalaxy/vectorgalaxy1805/vectorgalaxy180500204/101120094-orphanage-logo-isolated-on-white-background-for-your-web-and-mobile-app-design-colorful-vector-icon-.jpg" alt="logo" width='50px' height='50px' />
                <Navbar.Brand href="#">Vijaymala Orphanage Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
       
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#about">About Us</Nav.Link>
        <Nav.Link href="#we">What We Do</Nav.Link>
        <Nav.Link href="#contact">Contact Us</Nav.Link>
       
       
        
      </Nav>

        <Form className="d-flex">
              <Nav>
                <Button variant="outline-success"><NavLink exact to={"/Login"}>Sign Up</NavLink></Button>
              </Nav>
        </Form>
    </Navbar.Collapse>
  </Container>

          </Navbar>

<div>
  <Carousel>
          <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://kidsafeqld.com.au/wp-content/uploads/2020/08/kidsafe-qld-happy-children-home-hero-banner.jpeg" height="700"
                alt="First slide"
              />
                 <Carousel.Caption>
                    <h3>Vijaymala Orphanage Home</h3>
                    <p>Your help will give light to the next generation!</p>
                 </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ytimg.com/vi/LcliIr7hJbY/maxresdefault.jpg" height="700px"
                alt="Second slide"
              />
                 <Carousel.Caption>
                    <p>A good today for a better tomorrow</p>
                    <p>We believe in social transformation</p>
                </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://borgenproject.org/wp-content/uploads/15885121712_9e99820c10_z.jpg" height="700px"
                  alt="Third slide"
                />
                   <Carousel.Caption>
                       <p>We work among the Next Generation</p>
                   </Carousel.Caption>
          </Carousel.Item>
</Carousel>
</div> 

         <section className="bg-light" id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Know about us</h3>
               </div>
              </div>
             <div className="row">
                <p className="mt-4 mb-5">Creating the next generation to make a glorious imprint on the world.                             
                “God has given us two hands, one to receive with and other to give with”.
                 Our orphanage named as ‘Vijaymala Orphanage Home’ which has got a leading response from 
                 the people. This orphanage takes cares of children from 1st day itself and treats them 
                 like family, helping them to live a life of self-esteem. Beginning its work in ‘Vijaymala 
                 Orphanage Home’ with just 7 children.  It has become a hub of Child Welfare over the years. 
                 From Past few years, there’s a tremendous growth in our organization and admissions have 
                 increased up to 60 orphans.</p>
             </div>   
          </div>   
        </section>   
 
        <section className="" id="we">   
         <div className="container">
             <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">What We Do</h3>
               </div>
              </div>
              <div className="row">
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src="https://st.depositphotos.com/1003580/2153/i/600/depositphotos_21532561-stock-photo-happiness-without-limit-happy-children.jpg" alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">Vision</h4>
                          <p className="card-text text-secondary">Developing the next generation visionary leaders with 
                          Character and Competence to follow their purpose and establish the Kingdom of God.</p>
                       </div>
                      
                    </div>
                 </div>
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src="https://edienet.s3.amazonaws.com/blog/images/full_6098668.jpg?v=27/08/2019%2012:00:42" alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">Young People</h4>
                          <p className="card-text text-secondary">Inspiring and training the youths to change themselves 
                          and become catalysts for social transformation.</p>
                       </div>
                       
                    </div>
                 </div>
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src="https://static.businessworld.in/article/article_extra_large_image/1517454570_l8ibPN_cropped_(26).png" alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">Children & their community</h4>
                          <p className="card-text text-secondary">Working with the underprivileged children 
                          and their communities to assist them to achieve their God-given purpose!</p>
                       </div>
                         
                     </div>
                 </div>
              </div>
        </div>
      </section>  

        <section className="bg-light mt-5" id="contact">    
     <div className="container">
      <div className="row text-center">
        <div className="col-sm-12 col-md-12 mb-4">
            <h3 className="text-center mt-4 text-secondary">Contact Us</h3>
         </div>
        <div className="col-md-4">
          <div className="testimonial mb-5">
           <div className="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" className="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 className="font-weight-bold dark-grey-text mt-4">Samuel</h4>
          <h6 className="font-weight-bold blue-text my-3">Owner</h6>
          <p className="font-weight-normal dark-grey-text">
           Contact No. 9822444340 </p>
        </div>
      </div>
 
      <div className="col-md-4">
        <div className="testimonial mb-5">
          <div className="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" className="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 className="font-weight-bold dark-grey-text mt-4">John Doe</h4>
          <h6 className="font-weight-bold blue-text my-3">Tourist</h6>
          <p className="font-weight-normal dark-grey-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
        </div>
 
      </div>
      <div className="col-md-4">
        <div className="testimonial mb-5">
          <div className="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 className="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
          <h6 className="font-weight-bold blue-text my-3">Toursit</h6>
          <p className="font-weight-normal dark-grey-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.</p>
        </div>
        </div>
      </div>
    </div> 
   </section> 
    </div>
    );
}

export default Navigation;
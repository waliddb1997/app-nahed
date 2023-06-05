import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export default function ContactUs(props) {

  const popUp = (event)=>
  {
    alert("your query has been submitted");
  }
  return (
    <>
      <div className="heroimage-div">
        <img src="../images/covers/contactus_main.jpg" alt="" />
        <div className="centered">CONTACT US</div>
      </div>

      <div className="contactus-div">
        <div className="contactus-form-div">
          <Form onSubmit={popUp}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter your Name" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="Subject" placeholder="Enter Subject" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as= "textarea" rows={8} placeholder="Enter Message" required/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="contactus-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.6374860871633!2d10.091773774684114!3d33.84745832851755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12556e17b1f86317%3A0x5c8c3bf975b7591d!2sInstitut%20Sup%C3%A9rieur%20d&#39;Informatique%20et%20de%20Multim%C3%A9dia%20de%20Gab%C3%A8s!5e0!3m2!1sfr!2stn!4v1685976111437!5m2!1sfr!2stn"
                
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width={600}
            height={450}
            title="myFrame"
          />
        </div>
      </div>
    </>
  );
}

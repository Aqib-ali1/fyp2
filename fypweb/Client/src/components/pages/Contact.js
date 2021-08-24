import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import '../contact.css';

export default function Contact() {
  return(
  
  <div className="contact-div"> 
            <h2>Contact Support</h2>
            <br />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email address" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group><br /> 

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="email" placeholder="Enter Subject here" />
                </Form.Group><br />

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    <Form.Text className="text-muted">
                    Please enter the details of your request. A member of our support staff will respond as soon as possible
                    </Form.Text>
                </Form.Group><br/> 

                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Attachments  (Optional)</Form.Label><br/>
                    <Form.Control type="file" size="lg" />
                </Form.Group> <br/>

                <Button className="button-submit" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
  )
}

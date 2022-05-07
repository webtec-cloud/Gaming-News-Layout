import React from "react";
import "./Contactform.scss";
import { Form, Button } from "react-bootstrap";

const Contactform = () => {
  return (
    <div className="contact-section">
      <div className="contact-img">
        <img src="https://img.freepik.com/free-photo/woman-playing-video-games_137573-640.jpg?size=626&ext=jpg&ga=GA1.2.368898685.1651850887" />{" "}
      </div>
      <div className="contact-text">
        <div className="headline">contact form</div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="headline">Follow Us</div>
        <div className="icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-google-plus-g"></i>
        </div>
      </div>
    </div>
  );
};

export default Contactform;

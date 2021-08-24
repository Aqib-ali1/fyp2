import React, { useState } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { container, row, Form, Button } from "react-bootstrap";
import "../Signup.css";
import Axios from "axios";

export default function SignUp() {
  const [nameReg, setNameReg] = useState("");
  const [username, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passReg, setPassReg] = useState("");
  const [conpassReg, setConPassReg] = useState("");
  Axios.defaults.withCredentials = true;
  
  const createUser = () => {
    Axios.post("http://localhost:3001/api/insert", {
      name: nameReg,
      uname: username,
      email: emailReg,
      pass: passReg,
      conpass: conpassReg,
    }).then((response) => {
      console.log("response");
    });
  };

  return (
    <div className="signup-div mt-5 mb-5">
      <h3 className="signup">Signup Here</h3>
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
              setNameReg(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassReg(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              setConPassReg(e.target.value);
            }}
          />
        </Form.Group>
        <div className="button-div">
          <Button className="button-signup" type="submit" onClick={createUser}>
            Signup
          </Button>
        </div>
      </Form>
    </div>
  );
}

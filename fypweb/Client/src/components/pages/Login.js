import React, { useState, useEffect } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Parcing from "./Parcing";
import { container, row, Form, Button } from "react-bootstrap";
import "../Login.css";
import Axios from "axios";
import SignUp from "./SignUp";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      uname: username,
      pass: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true){
      setLoginStatus(response.data.user[0].uname);
      }
    });
  }, []);



  return (
    <div className="container-fluid">
      <div className="main">
        <div className="row">
          <div className="col mt-5">
            <h3>Login To Meet The Product</h3>
            <Form className="mt-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setUsername(e.target.value);
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
                    setPassword(e.target.value);
                  }}
                />
                <Form.Label className="forget-password">
                  Forget Password?
                </Form.Label>
              </Form.Group>
              <Form.Group className="mb-3 check" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <div className="text-center">
                <Button className="login-button" type="submit" onClick={login}>
                  Submit
                </Button>
              </div>
              <h1>{loginStatus}</h1>
              <div className="text-center mt-4">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    New to Meet The Product ?{" "}
                    <span className="link"> SignUp Now </span>
                  </Form.Label>
                  <Form.Label>
                    Problems or questions ?{" "}
                    <span className="link"> Contact Us </span>
                  </Form.Label>
                </Form.Group>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

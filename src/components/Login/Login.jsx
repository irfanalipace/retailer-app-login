import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // custom CSS for background
import { HiOutlineMail } from 'react-icons/hi'; // Import email icon
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import retailer from '../../assets/images/retailer-images.jpg';
import logo from '../../assets/images/logo-final.png';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={4} className='col-custom'>
            <div className="login-bg">
              <img src={retailer} alt="Other Image" className="other-image" />
              <img src={logo} alt="Logo" className="login-logo" />
              <div className="login-form">
                <div className='login-heading'>
                  <h2>SIGN IN</h2>
                  <hr />
                </div>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <div className="input-group">
                      <Form.Control type="email" placeholder="Email" />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <HiOutlineMail />
                        </span>
                      </div>
                    </div>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <div className="input-group">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text" onClick={togglePasswordVisibility}>
                          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </span>
                      </div>
                    </div>
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="primary" type="submit" className="login-button">
                      Sign In
                    </Button>
                  </div>

                  <div className='foget-password-link'>
                    <Link variant="link" className="forgot-password">
                      Forgot Password?
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './style.css';

function LoginForm() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div>
      <div className="social-buttons">
        <Button className='loginbtn2' variant="outline-secondary">
          <i className="bi bi-google" style={{ marginRight: '10px' }}></i> Continue with Google
        </Button><br />
        <Button className='loginbtn2' variant="outline-secondary">
          <i className="bi bi-facebook" style={{ marginRight: '10px' }}></i> Continue with Facebook
        </Button>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1, backgroundColor: "grey", height: "3px" }} />
        <p style={{ margin: "-2px 10px", fontFamily: "bold" }}><b>Or connect with</b></p>
        <div style={{ flex: 1, backgroundColor: "grey", height: "3px" }} />
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className='email' type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control className='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Remember me"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
        </Form.Group>
        <p className='policy'>By continuing, you agree to our <b>Terms of Service </b>and<b> Privacy Policy.</b></p>
        <Button className='btnsubmit' variant="primary" type="submit">
          Continue
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;

import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';


export default function Home() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccess(true);
  };

  const handleClose = () => {
    setShowSuccess(false);
  };

  return (
    <div>
      <Card>
        <Card.Header><h4>Welcome!</h4></Card.Header>
      <Card.Body>
        <h5>Home Page</h5>
        <p>This is the homepage of our website. Explore other section susing the navigation above.</p>
      </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address: </Form.Label>
              <br></br>
              <Form.Control type="email" onChange={e => setEmail(e.target.value)} />
              <div>Subscribe to our newsletter for updates.</div>
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </Form>
          <br />
          {showSuccess && ( <Alert variant="success" onClose={handleClose} dismissible> Successfully subscribed with email: {email} </Alert>)}
        </Card.Body>
      </Card>
    </div>
  );
}
import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

export default function Home() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <h2>Home Page</h2>
      <p>This is the homepage of our website, you may explore the other sections using the navigation above.</p>
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
          {showSuccess && <Alert variant="success">Successfully subscribed with email: {email}</Alert>}
        </Card.Body>
      </Card>
    </div>
  );
}
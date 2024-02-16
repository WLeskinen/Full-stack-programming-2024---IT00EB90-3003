import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <div>
      <Card>
        <Card.Header><h4>Contact Me</h4></Card.Header>
      <Card.Body>
      For questions or feedback, please choose a category below:
      </Card.Body>
      </Card>
      <br />

      <Card>
        <Card.Header>General Inquiry</Card.Header>
        <Card.Body>
          <Card.Text>For general inquiries, please email us at:</Card.Text>
          <Button variant="primary" href="mailto:general@example.com">general@example.com</Button>
        </Card.Body>
      </Card>
      <br />

      <Card>
        <Card.Header>Feedback</Card.Header>
        <Card.Body>
          <Card.Text>We value your feedback! Please share your comments at:</Card.Text>
          <Button variant="primary" href="mailto:feedback@example.com">feedback@example.com</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>Support</Card.Header>
        <Card.Body>
          <Card.Text>Need assistance? Contact our support team at:</Card.Text>
          <Button variant="primary" href="mailto:support@example.com">support@example.com</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactPage;
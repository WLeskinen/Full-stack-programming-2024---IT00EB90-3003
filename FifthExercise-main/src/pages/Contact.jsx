import React from 'react';
import { Card, Button } from 'react-bootstrap';


//Function responsible for our contact page, each inquiry is within their own card.
// Some exceptions have been made with adding custom colors to support and feedback buttons instead of the default blue color.
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
          <Button variant="primary" href="mailto:feedback@example.com" style={{ backgroundColor: '#ffc107', borderColor: '#ffc107', color: 'black' }}>feedback@example.com</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>Support</Card.Header>
        <Card.Body>
          <Card.Text>Need assistance? Contact our support team at:</Card.Text>
          <Button variant="primary" href="mailto:support@example.com" style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>support@example.com</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactPage;
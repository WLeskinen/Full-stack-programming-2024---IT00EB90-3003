import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Function responsible for creaintg our blog pages
// The function uses cards within an accordion to display what we have written inside our accordion.
// Each eventkey corresponds to their respective number on the page.
const Blogs = () => {
  return (
    <div>
    <Card>
    <Card.Header><h4>Blogs</h4></Card.Header>
    <Card.Body>
    <h5>Blog Articles</h5>
    <p>Find the latest articles and blog posts here.</p>
    </Card.Body>
    </Card>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          <Card>
            <Card.Header>Card Header #1</Card.Header>
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          <Card>
            <Card.Header>Card Header #2</Card.Header>
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
      <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
          <Card>
            <Card.Header>Card Header #3</Card.Header>
            <Card.Body>
              What's the point?
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
  );
}

export default Blogs;

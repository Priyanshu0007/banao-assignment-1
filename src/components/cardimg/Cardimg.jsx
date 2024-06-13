import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './cardimg.css';

function Cardimg() {
  return (
    <Container className='container3'>
      <Row>
        <Col xs={12} md={6}>
          <Card className="custom-card card-1" style={{padding: "20px", margin: "20px"}}>
            <Card.Body >
              <Card.Title><i className="bi bi-people-fill icon1"></i> People</Card.Title>
              <Card.Text>
                Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist, or collaborator.
              </Card.Text>
              <Button className="cartbtn cardbtn1 btn-card" variant="outline-primary">Connect</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card className="custom-card card-2" style={{padding: "20px", margin: "20px"}}>
            <Card.Body >
              <Card.Title><i className="bi bi-geo-alt-fill icon2"></i> Place</Card.Title>
              <Card.Text>
                Find a class, school, playground, auditorium, studio, shop, or an event venue. Book a slot at venues that allow booking through hobbycue.
              </Card.Text>
              <Button className="cartbtn cardbtn2 btn-card" variant="outline-primary">Meet up</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <Card className="custom-card card-3" style={{padding: "20px", margin: "20px"}}>
            <Card.Body>
              <Card.Title><i className="bi bi-basket3-fill icon3"></i> Product</Card.Title>
              <Card.Text>
                Find equipment or supplies required for your hobby. Buy, rent, or borrow from shops, online stores, or community members.
              </Card.Text>
              <Button className="cartbtn cardbtn3 btn-card" variant="outline-primary">Get it</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card className="custom-card card-4" style={{padding: "20px", margin: "20px"}}>
            <Card.Body>
              <Card.Title><i className="bi bi-calendar-check-fill icon4"></i> Program</Card.Title>
              <Card.Text>
                Find events, meetups, and workshops related to your hobby. Register or buy tickets online.
              </Card.Text>
              <Button className="cartbtn cardbtn4 btn-card" variant="outline-primary">Attend</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cardimg;

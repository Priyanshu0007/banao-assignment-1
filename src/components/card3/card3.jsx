import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './card3.css';

function Card3() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Card style={{ padding: "60px", border: 'none', borderRadius: '0', marginBottom: '60px' }} className='card3col'>
            <Card.Body>
              <Card.Title><i className="bi bi-fast-forward-circle-fill" style={{ color: '#8064A2' }}></i> Testimonials</Card.Title>
              <Card.Text style={{ fontSize: "18px" }}>
                In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com are a great service that helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
              </Card.Text>
              <Col xs={12} md={6} lg={12} className="ml-auto">
                <Image fluid src={"/musicimage.png"} style={{ maxWidth: "100%" }} />
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Card3;

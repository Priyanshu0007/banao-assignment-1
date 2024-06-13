import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './card2.css';

function Card2() {
   
  return (
    <Container className='containeer'>
      <Row>
        <Col xs={12}>
          <Card style={{ padding: "60px" }}>
            <Card.Body>
              <Card.Title><i className="bi bi-plus-circle-fill addicon"></i> Add your own</Card.Title>
              <Card.Text style={{ fontSize: "18px" }}>
                Are you a teacher or expert? Do you sell or rent out equipment, venue, or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
              </Card.Text>
              
              <Button variant="outline-primary" className='addbtn'>
                Add new
              </Button>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Card2;

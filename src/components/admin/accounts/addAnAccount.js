import React from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import './accounts.css';

function AddAnAccount() {
  return (
    <div>
      <div className='range'></div>
      <Container className='form-control-addform'>
        <Form>
          <Form.Row>
            <Col sm='6'>
              <Form.Group as={Row}  >
                <Form.Label column sm='2' className='form-style-label' > Name:</Form.Label>
                <Col sm='8'>
                  <Form.Control type='text' placeholder='enter name' className='form-control-addform' />
                </Col>
                <Form.Label column sm='2'>
                </Form.Label>
              </Form.Group>
            </Col>
            <Col sm='6'>
              <Form.Group as={Row}  >
                <Form.Label column sm='4' className='form-style-label' >Email:</Form.Label>
                <Col sm='8'>
                  <Form.Control type='text' placeholder='enter email' className='form-control-addform' />
                </Col>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm='6'>
              <Form.Group as={Row}  >
                <Form.Label column sm='2' className='form-style-label' >Contract_Types:</Form.Label>
                <Col sm='8'>
                  <Form.Control as='select' className='form-control-select'>
                    <option>Parttime</option>
                    <option>Offical</option>
                  </Form.Control>
                </Col>
                <Form.Label column sm='2'></Form.Label>
              </Form.Group>
            </Col>
            <Col sm='6'>
              <Form.Group as={Row}  >
                <Form.Label column sm='4' className='form-style-label' >Date_Of_Birth:</Form.Label>
                <Col sm='8'>
                  <Form.Control   type='date' className='form-control-addform' />
                </Col>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm='6'>
              <Form.Group as={Row}  >
                <Form.Label column sm='2' className='form-style-label' > Phone:</Form.Label>
                <Col sm='8'>
                  <Form.Control className='form-control-addform' type='text' placeholder='enter phone'/>
                </Col>
                <Form.Label column sm='2'>
                </Form.Label>
              </Form.Group>
            </Col>
            <Col sm='6'>
              <Form.Group as={Row}>
                <Form.Label column sm='4' className='form-style-label' >Address:</Form.Label>
                <Col sm='8'>
                  <Form.Control type='text' placeholder='enter address' className='form-control-addform' />
                </Col>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm='6'>
              <Form.Group as={Row}  >
                <Form.Label column sm='2' className='form-style-label' >Sex:</Form.Label>
                <Col sm='8'>
                  <Form.Check custom inline label="male" type='radio' />
                  <Form.Check custom inline label="female" type='radio' />
                </Col>
                <Form.Label column sm='2'></Form.Label>
              </Form.Group>
            </Col>
            <Col sm='6'>
              <Form.Group as={Row}>
                <Form.Label column sm='4' className='form-style-label' >DateJoin:</Form.Label>
                <Col sm='8'>
                  <Form.Control type='date'  className='form-control-addform' />
                </Col>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm='6'>
              <Form.Group as={Row}  >
                <Form.Label column sm='2' className='form-style-label' >Role:</Form.Label>
                <Col sm='8'>
                  <Form.Control as='select'>
                    <option>admin</option>
                    <option>HR</option>
                    <option>staff</option>
                  </Form.Control>
                </Col>
                <Form.Label column sm='2'></Form.Label>
              </Form.Group>
            </Col>
            <Col sm='6'>
              <Form.Group as={Row}>
                <Form.Label column sm='4' className='form-style-label' >StartContract:</Form.Label>
                <Col sm='8'>
                  <Form.Control type='date'  className='form-control-addform'/>
                </Col>
              </Form.Group>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    </div>
  );
}
export default AddAnAccount;

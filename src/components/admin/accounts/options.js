import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Modal } from 'react-bootstrap';
import { BsTrashFill} from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import ModalDetail from './modalDetail.js';
import './accounts.css';

function Options(props) {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  return (
    <Container className='options'>
      <Row>
        {/* Xóa */}
        <Col sm={4}>
          <BsTrashFill onClick={() => setShowModal(true)} />
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có chắc chắn muốn xóa {props.user.name} ra khỏi danh sách ?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setShowModal(false)}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
        {/* Chỉnh sửa */}
        <Col sm={4}>
          <BiEdit onClick={() => setShowModalEdit(true)} />
          <Modal show={showModalEdit} onHide={() => setShowModalEdit(false)} size='lg'>
            <Modal.Header closeButton>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Row>
                  <Col sm='6'>
                    <Form.Group as={Row}  >
                      <Form.Label column sm='2' className='form-style-label' > Name:</Form.Label>
                      <Col sm='8'>
                        <Form.Control type='text' defaultValue={props.user.name} className='form-control-addform' />
                      </Col>
                      <Form.Label column sm='2'>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm='6'>
                    <Form.Group as={Row}  >
                      <Form.Label column sm='4' className='form-style-label' >Email:</Form.Label>
                      <Col sm='8'>
                        <Form.Control type='text' defaultValue={props.user.email} className='form-control-addform' />
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
                        <Form.Control type='date' className='form-control-addform' />
                      </Col>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col sm='6'>
                    <Form.Group as={Row}  >
                      <Form.Label column sm='2'  className='form-style-label' > Phone:</Form.Label>
                      <Col sm='8'>
                        <Form.Control type='text' placeholder='enter phone' className='form-control-addform' />
                      </Col>
                      <Form.Label column sm='2'>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm='6'>
                    <Form.Group as={Row}>
                      <Form.Label column sm='4'  className='formStyleLabel' >Address:</Form.Label>
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
                        <Form.Control type='date' className='form-control-addform' />
                      </Col>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col sm='6'>
                    <Form.Group as={Row}  >
                      <Form.Label column sm='2' className='form-style-label' >Role:</Form.Label>
                      <Col sm='8'>
                        <Form.Control as='select' className='form-control-select'>
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
                        <Form.Control type='date' className='form-control-addform'/>
                      </Col>
                    </Form.Group>
                  </Col>
                </Form.Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => setShowModalEdit(false)}>
                Edit
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
        {/* chi tiết */}
        <Col sm={4}>
          <ModalDetail user ={props.user}/>
        </Col>
      </Row>
    </Container>
  );
}
export default Options;

import React from "react";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBRow, MDBCol , MDBBtn } from "mdb-react-ui-kit";
import AppContext from "../../AppContext";

import s from "./ModalForm.module.scss";

import icon from "../../img/let2.png"

function ModalForm()  {
  const { show, setShow } = React.useContext(AppContext);
  const [count, setCount] = React.useState(0)

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal className={s.modal} show={show} onHide={handleClose}>
        <Modal.Header className={s.modal_header}>
          <MDBRow className={s.modal_row}>
            <MDBCol md="4"></MDBCol>
            <MDBCol md="4">
              <Modal.Title className={s.modal_icon}>
                <img src={icon} width="150px" alt="logo" />
              </Modal.Title>
            </MDBCol>
            <MDBCol md="4"></MDBCol>
          </MDBRow>
          <MDBBtn
            className="btn-close btn-close-white"
            id="close"
            onClick={handleClose}
          ></MDBBtn>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Max words count</Form.Label>
              <Form.Control type="text" value="100" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Type your text</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                onChange={(e) => setCount(e.target.value.length)}
              />
            </Form.Group>
          </Form>
          <p>{count}/100</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalForm;

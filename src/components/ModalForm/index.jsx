import React, { useEffect } from "react";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBRow, MDBCol , MDBBtn } from "mdb-react-ui-kit";
import AppContext from "../../AppContext";

import s from "./ModalForm.module.scss";

import icon from "../../img/let2.png"

function ModalForm()  {
  const { show, setShow } = React.useContext(AppContext);
  const [count, setCount] = React.useState(0)
  const [value, setValue] =  React.useState("");
  const [maxCount, setMaxCount] = React.useState(100);

  const handleClose = () => setShow(false);

useEffect(() => {
  const valueCount = value.replace(/\n/g, "").split(" ");
  const avoidItems = ["the", "a", "an"];
  let res = valueCount.filter((val) => !avoidItems.includes(val))
  let resLength = res.toString().length
    setCount(resLength);
    console.log(valueCount)
  
}, [value])


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
              <Form.Control
              type="number"
                as="input"
                value={maxCount}
                oonChange={(e) => setMaxCount(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Type your text</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                onChange={(e) => setValue(e.target.value)}
              />
            </Form.Group>
          </Form>
          <p>{count}/{maxCount}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalForm;

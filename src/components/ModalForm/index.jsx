import React, { useEffect, useState, useContext } from "react";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBTextArea,
  MDBInput,
} from "mdb-react-ui-kit";
import AppContext from "../../AppContext";
import Image from "react-bootstrap/Image";

import s from "./ModalForm.module.scss";

import icon from "../../img/let2.png"

function ModalForm()  {
  const { show, setShow } = useContext(AppContext);
  const [count, setCount] = useState(0)
  const [value, setValue] =  useState("");
  const [maxCount, setMaxCount] = useState(100);

  const handleClose = () => setShow(false);

  useEffect(() => {
    const valueCount = value.replace(/\n/g, "").split(" ");
    const avoidItems = ["the", "a", "an"];
    let res = valueCount.filter((val) => !avoidItems.includes(val)).toString();
    let resLength = res.length
      setCount(resLength)
 
  }, [value])

  useEffect(() => {
    if (count < maxCount){
      setValue(value.slice(0, maxCount));
  }
  }, [maxCount])
  
  return (
    <>
      <Modal className={s.modal} show={show} onHide={handleClose}>
        <Modal.Header className={s.modal_header}>
          <MDBRow className={s.modal_row}>
            <MDBCol md="4"></MDBCol>
            <MDBCol md="4">
              <Modal.Title className={s.modal_icon}>
                <Image src={icon} fluid width="150px" alt="logo"></Image>
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
            <MDBInput
              className="mb-3"
              label="Max words count"
              id="form1"
              type="text"
              value={maxCount}
              onChange={(e) => setMaxCount(e.target.value)}
              autoFocus
            />
            <MDBTextArea
              className="mb-3"
              label="Type your text"
              id="textAreaExample"
              rows={7}
              value={value}
              onChange={(e) =>
                setValue(e.target.value.replace(/[^А-яЁё A-Za-z \n]/g, ""))
              }
              maxLength={maxCount}
            />
          </Form>
          <p>
            {count}/{maxCount}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalForm;

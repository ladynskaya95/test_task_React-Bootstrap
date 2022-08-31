import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBTextArea,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

import s from "./ModalForm.module.scss";

import icon from "../../img/let2.png"
class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      count:0,
      value: "",
      maxCount: 100
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setCount = this.setCount.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  handleShow() {
    this.setState({
      show: true,
    });
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

   setCount(e){
    const validValue = e.target.value.replace(/[^А-яЁё A-Za-z \n]/g, "")
    const valueCount = validValue.replace(/\n/g, "").split(" ");
    const avoidItems = ["the", "a", "an"];
    const res = valueCount.filter((val) => !avoidItems.includes(val)).toString()
    this.setState({
      value: validValue,
      count: res.length,
    });
   }

  setValue(e) {
    const maxValidValue = e.target.value
    if (this.state.count < this.state.maxCount) {
      this.setState({
        maxCount: maxValidValue,
        value: this.state.value.slice(0, maxValidValue),
      });
    } else {
      this.setState({
        maxCount: maxValidValue,
        value: this.state.value,
      });
    }
  }

  render() {
    return (
      <>
        <Nav>
          <Nav.Item className="btn" onClick={this.handleShow}>
            <MDBIcon fas icon="bars" size="2x" />
          </Nav.Item>
        </Nav>
        <Modal
          className={s.modal}
          show={this.state.show}
          onHide={this.handleClose}>
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
              onClick={this.handleClose}
            ></MDBBtn>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <MDBInput
                className="mb-3"
                label="Max words count"
                id="form1"
                type="text"
                value={this.state.maxCount}
                onChange={(e) => this.setValue(e)} />
              <MDBTextArea
                className="mb-3"
                label="Type your text"
                id="textAreaExample"
                rows={7}
                value={this.state.value}
                onChange={(e) => this.setCount(e)}
                maxLength={this.state.maxCount} />
            </Form>
            <p>
              {this.state.count}/{this.state.maxCount}
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
};

export default ModalForm;
 
              
               

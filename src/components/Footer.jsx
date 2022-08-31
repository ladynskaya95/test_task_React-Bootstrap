import React from 'react';

import {
  MDBFooter,
  MDBContainer,
  MDBBtn,
} from "mdb-react-ui-kit";

import { ReactComponent as Twitter } from "../../src/svg/twitter.svg";
import { ReactComponent as Facebook } from "../../src/svg/facebook.svg";
import { ReactComponent as Instagram } from "../../src/svg/instagram.svg";
import { ReactComponent as Whatsapp } from "../../src/svg/whatsapp.svg";


const links = [
  { page: <Twitter />, href: "https://twitter.com/" },
  { page: <Whatsapp />, href: "https://www.facebook.com/"},
  { page: <Facebook />, href: "https://web.whatsapp.com/"},
  { page: <Instagram />, href: "https://www.instagram.com/"},
];

const Footer = () => {
  return (
    <MDBFooter className="footer">
      <MDBContainer className="p-4 d-flex">
        <section className="mb-4">
          {links.map((link) => (
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href={link.href}
              target="_blank"
              role="button">
              {link.page}
            </MDBBtn>
          ))}
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}
export default Footer

    
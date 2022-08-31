import React, {useEffect} from 'react';

import {
  MDBFooter,
  MDBContainer,
  MDBBtn,
} from "mdb-react-ui-kit";

import { ReactComponent as Twitter} from "../../src/svg/twitter.svg";
import { ReactComponent as Whatsapp } from "../../src/svg/whatsapp.svg";
import { ReactComponent as Facebook} from "../../src/svg/facebook.svg";
import { ReactComponent as Instagram } from "../../src/svg/instagram.svg";

const links = [
  { id: 1, page: <Twitter />, href: "https://twitter.com/" },
  { id: 2, page: <Whatsapp />, href: "https://web.whatsapp.com/" },
  { id: 3, page: <Facebook />, href: "https://www.facebook.com/" },
  { id: 4, page: <Instagram />, href: "https://www.instagram.com/" },
];

const Footer = () => {
  useEffect(() => {
    document.head.innerHTML += `
  <meta name="robots" content="noindex">
  `;}, []);

  return (
    <MDBFooter className="footer">
      <MDBContainer className="p-4 d-flex">
        <section className="mb-4">
          {links.map((link) => (
            <MDBBtn
              key={link.id}
              outline
              color="light"
              floating
              className="m-1"
              href={link.href}
              target="_blank"
              role="button">
              {link.page}
              {/* <use xlinkHref={link.page}></use> */}
            </MDBBtn>
          ))}
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}
export default Footer

    
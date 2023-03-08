import React, { useState } from "react";
import {
  Footer1,
  Div,
  Cherry,
  Whatsapp,
  Instagram,
  Contact,
} from "./footerelements";
import "./footer.css";
const Footer = () => {
  return (
    <Footer1>
      <Div>
        <a
          href="
https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F233558644115&e=ATO_jBXwMZCV_EEsdlVaUZSCyNDJ9FW58mWxpCG13kgi_6wce-1a0kdG_2rklXgDlN9CP2b3CzzljoqQni7B8g&s=1"
          target="blank"
          className="a"
        >
          <Whatsapp />
        </a>
        <a
          href="https://www.instagram.com/cherrytop_gh/"
          target="blank"
          className="a"
        >
          <Instagram />
        </a>
      </Div>
    </Footer1>
  );
};

export default Footer;

import React from "react";
import styled from "styled-components";

import weworkLogo from "../../assets/images/wework_logo.png";

const Header = styled("div")`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background: #252729;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 150px;
  }
`;

export default () => (
  <Header>
    <img
      src={weworkLogo}
      alt="wework-logo"
    />
  </Header>
);
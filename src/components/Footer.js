import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterWrapper = styled.footer`
  background-color: #117ce4;
  border-radius: 2vw 2vw 0 0;
  padding: 2vh;
  margin-bottom: 0;

  @media screen and (max-width: 750px) {
    padding: 1vw;
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        All Rights Reserved by Mustafa Taibah | <Link to="credits">Credits</Link>
        <strong> &#169;</strong>
      </p>
    </FooterWrapper>
  );
};

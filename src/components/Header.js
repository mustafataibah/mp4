import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderDiv = styled.div`
  border-radius: 0 0 2vw 2vw;
  background-color: #117ce4;
  margin-bottom: 2vh;
  padding: 2vh;

  @media screen and (max-width: 750px) {
    margin: 0;
    border-radius: 0;
    padding: 0;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderContent = styled.div`
  text-align: left;
  padding: 2vh;

  @media screen and (max-width: 750px) {
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  align-self: center;
`;
const StyledButton = styled.button`
  background-color: #ffffff;
  color: #117ce4;
  border: 2px solid #117ce4;
  border-radius: 5px;
  padding: 1vw 2vw;
  cursor: pointer;
  z-index: 1;
  margin-right: 1vh;
  font-size: 1vw;
`;

export function Header({ onLoginClick, loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  const handleAuth = () => {
    if (loggedIn) {
      setLoggedIn(false);
      navigate("/");
    } else {
      onLoginClick();
    }
  };

  return (
    <HeaderDiv>
      <HeaderWrapper>
        <HeaderContent>
          <div>
            <h1>Mustafa Taibah</h1>
            <p>Welcome to My Portfolio</p>
          </div>
        </HeaderContent>
        <ButtonWrapper>
          <StyledButton type="button" onClick={handleAuth} id="log-in-btn">
            {loggedIn ? "Sign Out" : "Login"}
          </StyledButton>
        </ButtonWrapper>
      </HeaderWrapper>
    </HeaderDiv>
  );
}

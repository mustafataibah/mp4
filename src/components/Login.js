import React, { useState } from "react";
import styled from "styled-components";
import { userPass } from "../data/authData.js";

const LoginScreen = styled.div`
  position: absolute;
  top: calc(5vw + 50px);
  right: 4vw;
  width: 20vw;
  height: auto;
  background: rgba(21, 25, 25, 0.75);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vw;
  border-radius: 12px;
  flex-direction: column;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};

  @media screen and (max-width: 750px) {
    right: 8vw;
  }
`;

const LoginInput = styled.input`
  width: 18vw;
  height: 3vw;
  font-size: 1.2vw;
  margin-bottom: 10px;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 0 10px;
`;

const SubmitButton = styled.button`
  width: 10vw;
  height: 3vw;
  font-size: 1.2vw;
  border-radius: 10px;
  background-color: #117ce4;
  color: white;
`;

const Notification = styled.div`
  margin-top: 10px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 5px;
  display: ${({ show }) => (show ? "block" : "none")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;

export function Login({ setLoggedIn, showLoginForm, setShowLoginForm }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tryLimit, setTryLimit] = useState(0);
  const [authFailed, setAuthFailed] = useState(false);
  const [lastTryWarning, setLastTryWarning] = useState(false);

  const authenticate = () => {
    let isAuthenticated = false;

    for (const user in userPass) {
      if (user === password && userPass[user] === username) {
        isAuthenticated = true;
        break;
      }
    }

    if (isAuthenticated) {
      setLoggedIn(true);
      setShowLoginForm(false);
      setTryLimit(0);
      setUsername("");
      setPassword("");
      setAuthFailed(false);
    } else {
      setTryLimit((prevTryLimit) => {
        const newTryLimit = prevTryLimit + 1;
        if (newTryLimit >= 3) {
          window.close();
        }
        if (newTryLimit === 2) {
          setLastTryWarning(true);
        }
        return newTryLimit;
      });
      setAuthFailed(true);
    }
  };

  const exceededAttempts = tryLimit >= 3;

  return (
    <LoginScreen show={showLoginForm}>
      <LoginInput
        type="text"
        id="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <LoginInput
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <SubmitButton type="button" onClick={authenticate} disabled={exceededAttempts}>
        Submit
      </SubmitButton>
      <Notification show={authFailed && showLoginForm}>
        {authFailed && (
          <h5>
            {lastTryWarning
              ? `Last attempt remaining, the page will close after this try.`
              : `Authentication failed, you have ${3 - tryLimit} more tries`}
          </h5>
        )}
      </Notification>
    </LoginScreen>
  );
}

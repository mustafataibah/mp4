import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/pages/Home";
import { Education } from "./components/pages/Education";
import { Credits } from "./components/pages/Credits";
import { Experience } from "./components/pages/Experience";
import { Projects } from "./components/pages/Projects";
import { Leadership } from "./components/pages/Leadership";
import { Extracurriculars } from "./components/pages/Extracurriculars";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: #0f0e0e;
  }

  a {
    color: inherit;
  }

  a:hover {
    color: #526F7A;
  }

  h1,
  h3 {
    font-size: calc(1vw + 2vmin);
    font-weight: 700;
  }

  p {
    font-size: calc(1vw + 1vmin);
    font-weight: 300;
  }

  @media screen and (max-width: 750px) {
    p {
      font-size: calc(1vw + 1vmin);
    }
  }
  
`;

const PageWrapper = styled.div`
  width: calc(100% - 20vh);
  margin: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-grow: 1;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const MainWrapper = styled.main`
  flex: 0 0 70%;
  padding: 2vh;
  background-color: #d7f2f4;
  border-radius: 0 2vw 2vw 0;
  margin-bottom: 2vh;

  @media screen and (max-width: 750px) {
    flex: 0 0 100%;
    border-radius: 2vw;
    padding: 1vw;
  }
`;

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");
  const [showLoginForm, setShowLoginForm] = useState(false);

  // To fix a bug where if user refreshes when he is on a page that is only accessible when logged in, he will be redirected to the home page
  // As such now, the login state is saved to local storage and user will only be logged out if he clicks the logout button and not when he refreshes
  useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn);
  }, [loggedIn]);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <BrowserRouter>
          <Header
            loggedIn={loggedIn}
            onLoginClick={toggleLoginForm}
            setLoggedIn={setLoggedIn}
          />
          <Login
            showLoginForm={showLoginForm}
            setShowLoginForm={setShowLoginForm}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
          <Container>
            <Navigation loggedIn={loggedIn} />
            <Routes>
              <Route
                path=""
                element={
                  <MainWrapper>
                    <Home />
                  </MainWrapper>
                }
              />
              <Route
                path="education"
                element={
                  <MainWrapper>
                    <Education />
                  </MainWrapper>
                }
              />
              <Route
                path="experience"
                element={
                  <MainWrapper>
                    <Experience />
                  </MainWrapper>
                }
              />
              <Route
                path="projects"
                element={
                  <MainWrapper>
                    <Projects />
                  </MainWrapper>
                }
              />
              <Route
                path="Leadership"
                element={
                  <MainWrapper>
                    <Leadership />
                  </MainWrapper>
                }
              />
              <Route
                path="extracurriculars"
                element={
                  <MainWrapper>
                    <Extracurriculars />
                  </MainWrapper>
                }
              />
              <Route
                path="credits"
                element={
                  <MainWrapper>
                    <Credits />
                  </MainWrapper>
                }
              />
            </Routes>
          </Container>
          <Footer />
        </BrowserRouter>
      </PageWrapper>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

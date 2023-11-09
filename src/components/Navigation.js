import React from "react";
import styled from "styled-components";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const StyledNav = styled.nav`
  flex: 0 0 30%;
  background-color: #117ce4;
  border-radius: 2vw 0 0 2vw;
  margin-bottom: 2vh;
  padding: 2vh;

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  li {
    padding: 1vh;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 3vh;
    font-weight: 500;
  }

  @media screen and (max-width: 750px) {
    flex: 0 0 100%;
    border-radius: 2vw;
    padding: 1vw;
    border-radius: 0 0 2vw 2vw;

    ul {
      flex-direction: row;
      justify-content: space-around;
    }

    li {
      margin: 0;
      padding: 0;
      font-size: calc(1vw + 1vmin);
    }
  }
`;

export function Navigation({ loggedIn }) {
  return (
    <StyledNav>
      <ul>
        <CustomLink to="">Home</CustomLink>
        <CustomLink to="education">Education</CustomLink>
        <CustomLink to="experience">Experience</CustomLink>
        <CustomLink to="extracurriculars">Extracurriculars</CustomLink>

        {loggedIn && (
          <>
            <CustomLink to="projects">Projects</CustomLink>
            <CustomLink to="leadership">Leadership</CustomLink>
          </>
        )}
      </ul>
    </StyledNav>
  );
}

function CustomLink({ to, children }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  const linkStyles = {
    textDecoration: "none",
  };

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} style={linkStyles}>
        {children}
      </Link>
    </li>
  );
}

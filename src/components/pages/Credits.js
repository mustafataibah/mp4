import React from "react";
import { ContentArea, TextWrapper } from "./styles/SharedStyles";
import { Link } from "react-router-dom";

export const Credits = () => {
  return (
    <div>
      <h3 style={{ textAlign: "center", fontSize: "3vh", paddingBottom: "2vw" }}>
        Credits
      </h3>
      <ContentArea>
        <TextWrapper>
          <ul>
            <li>This website was built by Mustafa Taibah using HTML and CSS.</li>
            <li>
              The profile {""}
              <Link to="/">image</Link>
              {""} is licensed under a {""}
              <Link to="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International
                License
              </Link>
            </li>
            <li>
              The volleyball team {""}
              <Link to="/extracurriculars">image</Link> is licensed under a{" "}
              <Link to="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International
                License
              </Link>
              .
            </li>
          </ul>
        </TextWrapper>
      </ContentArea>
    </div>
  );
};

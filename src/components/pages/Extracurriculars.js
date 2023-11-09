import React from "react";
import VolleyballTeam from "../../media/VolleyballTeam.JPG";
import { ContentArea, TextWrapper, ImageWrapper } from "./styles/SharedStyles";
import styled from "styled-components";

const VolleyballImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 2vw;

  @media screen and (max-width: 750px) {
    width: 40vw;
    height: auto;
    border-radius: 2vw;
  }
`;

export const Extracurriculars = () => {
  return (
    <>
      <h3 style={{ textAlign: "center", fontSize: "3vh", paddingBottom: "2vw" }}>
        Extracurriculars
      </h3>
      <ContentArea>
        <ImageWrapper>
          <VolleyballImage src={VolleyballTeam} alt="Volleyball Team" />
        </ImageWrapper>
        <TextWrapper>
          <p id="main-text" style={{ textAlign: "justify" }}>
            Apart from my academic and professional endeavors, I was the volleyball
            captain for the high school varsity team. Under my leadership, we achieved 2nd
            place in the regional tournament and 5th place in the countrywide tournament.
          </p>
        </TextWrapper>
      </ContentArea>
    </>
  );
};

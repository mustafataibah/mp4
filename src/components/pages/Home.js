import React from "react";
import profileImage from "../../media/MustafaTaibah.jpeg";
import styled from "styled-components";
import { ContentArea, TextWrapper, ImageWrapper } from "./styles/SharedStyles";

const MainTitle = styled.h3`
  text-align: center;
  font-size: 3vh;
  padding-bottom: 2vw;
`;

const MainText = styled.p`
  text-align: justify;
  font-size: calc(1vw + 1vmin);
  font-weight: 300;

  @media screen and (max-width: 750px) {
    padding-bottom: 1vw;
  }
`;

const ProfileImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 2vw;

  @media screen and (max-width: 750px) {
    width: 40vw;
    height: auto;
    border-radius: 2vw;
  }
`;

export const Home = () => {
  return (
    <>
      <MainTitle>Home</MainTitle>
      <ContentArea>
        <ImageWrapper>
          <ProfileImage src={profileImage} alt="Mustafa Taibah" />
        </ImageWrapper>
        <TextWrapper>
          <MainText>
            Hi, I'm Mustafa Taibah, a passionate Software Engineer with hands-on
            experience in app development, research, and project leadership. I've led
            innovative projects in real-time facial recognition and wireless transmission
            of medical data. I'm excited to showcase this simple website I built using
            React.
          </MainText>
        </TextWrapper>
      </ContentArea>
      <MainText>
        Welcome to my website, take a look around. You can find more information on me
        using the navigation bar.
      </MainText>
    </>
  );
};

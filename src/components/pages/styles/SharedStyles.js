import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 0 35%;
  margin-bottom: 2vh;
`;

export const TextWrapper = styled.div`
  flex: 0 0 65%;
  text-align: left;
  padding: 2vh;
  ul {
    list-style-type: none;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    padding: 1vh;
    margin-top: auto;
    margin-bottom: auto;
    font-weight: 300;
  }

  @media screen and (max-width: 750px) {
    padding: 1vw;
  }
`;

export const Border = styled.div`
  margin-bottom: 1.5vh;
  padding: 2vh;
  border-radius: 1.5vh;
  background-color: #ffffff;
  border: 0.4vh solid #117ce4;
  h4 {
    margin-top: 0;
    font-weight: 700;
    color: #117ce4;
    margin-bottom: 1vh;
  }
  p,
  li {
    margin: 0.5vh 0;
    font-weight: 300;
  }
  ul {
    list-style-type: square;
    margin-left: 2vw;
  }
  a {
    color: #117ce4;
    font-weight: 500;
  }

  @media screen and (max-width: 750px) {
    li {
      font-size: calc(1vw + 1vmin);
    }

    h4 {
      font-size: calc(1vw + 2vmin);
    }
`;

export const NoBorder = styled.div`
  margin-bottom: 2vh;
  padding: 2vh;
  border-radius: 1.5vh;
  background-color: #ffffff;
  border: 0.4vh solid #d7f2f4;
  h4 {
    margin-top: 0;
    font-weight: 700;
    color: #117ce4;
    margin-bottom: 1vh;
  }
  p {
    margin: 0.5vh 0;
    font-weight: 300;
  }

  @media screen and (max-width: 750px) {
    li {
      font-size: calc(1vw + 1vmin);
    }

    h4 {
      font-size: calc(1vw + 2vmin);
    }
`;

import React from "react";
import { Border, ContentWrapper } from "./styles/SharedStyles";

export const Education = () => {
  return (
    <>
      <div>
        <h3 style={{ textAlign: "center", fontSize: "3vh", paddingBottom: "2vw" }}>
          Education
        </h3>
        <ContentWrapper>
          <Border>
            <h4>Bachelor's Degree</h4>
            <p>School: Boston University</p>
            <p>
              Degree: Bachelor of Arts in Computer Science with a minor in Data Science
            </p>
            <p>Relevant Coursework:</p>
            <ul>
              <li>Introduction to Algorithms</li>
              <li>Product Development</li>
              <li>Software Engineering</li>
              <li>Intro to Machine Learning and Artificial Intelligence</li>
            </ul>
          </Border>
          <Border>
            <h4>High School</h4>
            <p>School: Dhahran Ahliyya School</p>
            <p>GPA: 4.0</p>
            <p>Graduated: May 2020</p>
            <p>Location: Dhahran, Saudi Arabia</p>
          </Border>
        </ContentWrapper>
      </div>
    </>
  );
};

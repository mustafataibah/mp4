import React from "react";
import { Border, ContentWrapper } from "./styles/SharedStyles";

export const Experience = () => {
  return (
    <div>
      <h3 style={{ textAlign: "center", fontSize: "3vh", paddingBottom: "2vw" }}>
        Experience
      </h3>
      <ContentWrapper>
        <Border>
          <h4>Technical Lead at Synth Sense</h4>
          <p>Roles & Responsibilities:</p>
          <ul>
            <li>Lead the weekly scrum meetings for a team of 4.</li>
            <li>
              Worked on a web app built in React that tracks and mimics face and hand
              gestures.
            </li>
            <li>
              Collaborated closely with a Product Owner to align the app with business
              requirements.
            </li>
            <li>
              Integrated real-time weather and room noise level tracking into the app.
            </li>
          </ul>
          <p>
            Website:{" "}
            <a href="https://synth-sense1.web.app/" target="_blank" rel="noreferrer">
              synth-sense1.web.app/
            </a>
          </p>
        </Border>
        <Border>
          <h4>
            Research Internship under Professor Rongwei Mao, University of California
            Irvine
          </h4>
          <p>Roles & Responsibilities:</p>
          <ul>
            <li>
              Developed an ESP32 model for transmitting and receiving wireless Wi-Fi
              signals and endoscopy footage using C++.
            </li>
            <li>Collaborated in developing a Xamarin.Mac interface for ESP32.</li>
          </ul>
        </Border>
      </ContentWrapper>
    </div>
  );
};

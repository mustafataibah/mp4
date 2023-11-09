import React from "react";
import { NoBorder } from "./styles/SharedStyles";

export const Projects = () => {
  return (
    <div>
      <h3 style={{ textAlign: "center", fontSize: "3vh", paddingBottom: "2vw" }}>
        Projects
      </h3>
      <NoBorder>
        <h4>RAFT Distributed System</h4>
        <p>Implemented a program in Go simulating the RAFT consensus algorithm.</p>
      </NoBorder>
      <NoBorder>
        <h4>Art Guessr</h4>
        <p>
          Developed an art guessing game in HTML, CSS, JS, and Firebase. Play it {""}
          <a href="https://artguessr.art/">here!</a>
        </p>
      </NoBorder>
      <NoBorder>
        <h4>Dynamic Memory Allocator</h4>
        <p>
          Designed a C-based buddy system memory allocator with 97% efficiency,
          incorporating segregated fits and block headers/footers for optimized
          management.
        </p>
      </NoBorder>
      <p>
        P.S. look at this cool website: {""}
        <a href="https://mustafataibah.vercel.app/" target="_blank" rel="noreferrer">
          mustafataibah.vercel.app
        </a>
      </p>
      <p>
        For more cool projects, check out my {""}
        <a href="https://github.com/mustafataibah">GitHub</a>
      </p>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NFT from "../assets/NFts.png";
import baffle from "baffle";
import gif from "../assets/sparkle.gif";
export default function Head() {
  const [text, setText] = useState("YOU DONT KNOW CODE (ﾉ◕ヮ◕)ﾉ");

  useEffect(() => {
    const target = baffle(".obfuscated");
    target.set({
      characters:
        "▓Y▒O░U▒ ▓Y▒O░U▒ █D▒O▓N█'T▒ █D▒O▓N█'T▒ ▒K▓N▒O▓W█ ▒K▓N▒O▓W█ ░C▒O▓D░E ░C▒O▓D░E",
      speed: 100,
    });
    target.start();
    target.reveal(1000, 1000);
  }, []);
  return (
    <Container>
      <div className="left">
        <div className={`animated-text`}>
          {" "}
          <h2 className="obfuscated animate__animated  animate__fadeInUp delay-2">
            {" "}
            {text}
          </h2>
        </div>
      </div>
      <div className="right">
        <img src={NFT} alt="" />
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .left,
  .right {
    width: 45%;
  }
  .right {
    display: flex;
    justify-content: center;
    img {
      width: 70%;
    }
  }
  .animated-text {
    height: 192px;
    width: 691.2;
  }
`;

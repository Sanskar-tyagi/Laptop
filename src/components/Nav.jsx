import React from "react";
import styled from "styled-components";
export default function Nav() {
  return (
    <Container>
      <nav class="navbar navbar-expand-lg container mt-5 navbar-dark  bg-none">
        <a class="navbar-brand" href="#">
          <div class="spinner"></div>
          TYAGI
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse  justify-content-center  navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav justify-content-center ">
            <li class="nav-item mx-3 active">
              <a class="nav-link" href="/">
                HOME
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="/">
                CODES
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="/">
                GIT
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="/">
                PORTFOLIO
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
}
const Container = styled.div`
  @keyframes change-digits {
    0% {
      content: "01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100 01100101 01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100  ";
    }
    100% {
      content: "00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100 01100101 01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100 01100101 01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 ";
    }
  }

  &::after {
    content: "01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100 01100101 01001111 01110000 01100101 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100   ";
    top: 0px;
    left: 0px;
    color: rgb(229, 225, 230);
    font-size: 12px;
    pointer-events: none;
    position: fixed;
    text-align: center;
    width: 100%;
    opacity: 0.3;
    -webkit-mask-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 5%,
      rgb(0, 0, 0) 20%,
      rgb(0, 0, 0) 80%,
      rgba(0, 0, 0, 0) 95%
    );
    white-space: nowrap;
    overflow: hidden;
    z-index: 200;
    animation: change-digits 500ms linear 1s infinite normal;
  }

  .spinner:before {
    transform: rotateX(60deg) rotateY(45deg) rotateZ(45deg);
    animation: 750ms rotateBefore infinite linear reverse;
  }

  .spinner:after {
    transform: rotateX(240deg) rotateY(45deg) rotateZ(45deg);
    animation: 750ms rotateAfter infinite linear;
  }

  .spinner:before,
  .spinner:after {
    box-sizing: border-box;
    content: "";
    display: block;
    position: absolute;
    margin-top: -2em;
    margin-left: -5em;
    width: 5em;
    height: 5em;
    transform-style: preserve-3d;
    transform-origin: 50%;
    transform: rotateY(50%);
    perspective-origin: 50% 50%;
    perspective: 340px;
    background-size: 5em 5em;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI2NnB4IiBoZWlnaHQ9IjI5N3B4IiB2aWV3Qm94PSIwIDAgMjY2IDI5NyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+CiAgICA8dGl0bGU+c3Bpbm5lcjwvdGl0bGU+CiAgICA8ZGVzY3JpcHRpb24+Q3JlYXRlZCB3aXRoIFNrZXRjaCAoaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoKTwvZGVzY3JpcHRpb24+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8cGF0aCBkPSJNMTcxLjUwNzgxMywzLjI1MDAwMDM4IEMyMjYuMjA4MTgzLDEyLjg1NzcxMTEgMjk3LjExMjcyMiw3MS40OTEyODIzIDI1MC44OTU1OTksMTA4LjQxMDE1NSBDMjE2LjU4MjAyNCwxMzUuODIwMzEgMTg2LjUyODQwNSw5Ny4wNjI0OTY0IDE1Ni44MDA3NzQsODUuNzczNDM0NiBDMTI3LjA3MzE0Myw3NC40ODQzNzIxIDc2Ljg4ODQ2MzIsODQuMjE2MTQ2MiA2MC4xMjg5MDY1LDEwOC40MTAxNTMgQy0xNS45ODA0Njg1LDIxOC4yODEyNDcgMTQ1LjI3NzM0NCwyOTYuNjY3OTY4IDE0NS4yNzczNDQsMjk2LjY2Nzk2OCBDMTQ1LjI3NzM0NCwyOTYuNjY3OTY4IC0yNS40NDkyMTg3LDI1Ny4yNDIxOTggMy4zOTg0Mzc1LDEwOC40MTAxNTUgQzE2LjMwNzA2NjEsNDEuODExNDE3NCA4NC43Mjc1ODI5LC0xMS45OTIyOTg1IDE3MS41MDc4MTMsMy4yNTAwMDAzOCBaIiBpZD0iUGF0aC0xIiBmaWxsPSIjMDAwMDAwIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==);
  }

  @keyframes rotateBefore {
    from {
      transform: rotateX(60deg) rotateY(45deg) rotateZ(0deg);
    }

    to {
      transform: rotateX(60deg) rotateY(45deg) rotateZ(-360deg);
    }
  }

  @keyframes rotateAfter {
    from {
      transform: rotateX(240deg) rotateY(45deg) rotateZ(0deg);
    }

    to {
      transform: rotateX(240deg) rotateY(45deg) rotateZ(360deg);
    }
  }
  
  .navbar {
    justify-content: space-evenly !important;
  }
`;

import React from "react";
import "./App.css";
import { ScrollControls, Scroll } from "@react-three/drei";
import Head from "./components/Head";
import Purpose from "./components/Purpose";
import { Laptop } from "./Model/Scene";
function App() {
  return (
    <>
      <ScrollControls pages={6} damping={0.25}>
        <Scroll>
          <Laptop />
        </Scroll>
        <Scroll html style={{ width: "100%" }}>
          <Head
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
            }}
          />
          <Purpose
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
            }}
          />
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const watchWindowWidth = () => {
      console.log("resize");
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", watchWindowWidth);
    return () => {
      console.log("cleaning up..");
      window.removeEventListener("resize", watchWindowWidth);
    };
  }, []); // without [] both resized and cleaning up renders

  return (
    <>
      <h1>Window width: {windowWidth}</h1>
    </>
  );
};

export default WindowTracker;

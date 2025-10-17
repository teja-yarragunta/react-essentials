import React from "react";
import { useState } from "react";

const Pad = (props) => {
  // local state for each button
  //   const [colorOn, setColorOn] = useState(props.on);
  return (
    <>
      <div className="pad-container">
        <button
          style={{ backgroundColor: props.color }}
          // className={props.on ? "on" : ""}
          className={props.on ? "on" : undefined}
          onClick={() => props.toggle(props.id)}
        ></button>
        {/* what if we want to turn all of them off, that won't be possible using the local state */}
      </div>
    </>
  );
};

export default Pad;

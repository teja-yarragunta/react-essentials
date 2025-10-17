import React from "react";
import { useState } from "react";

const Joke = (props) => {
  const [isShown, setIsShown] = useState(false);
  const toggleShown = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {/* {isShown && <p>{props.punchline}</p>} */}
      {/* {!isShown && <button onClick={toggleShown}>Show punchline</button>}
      {isShown && <button onClick={toggleShown}>Hide punchline</button>} */}

      {/* lets use ternary now */}
      {/* in react its better to use ternary, because the && needs to be boolean, so if the value is 0, it will display 0 as well, if not boolean, better to explicitly mention like length > 0 like that*/}

      {isShown ? <p>{props.punchline}</p> : null}
      <button onClick={toggleShown}>
        {isShown ? "hide" : "show"} punchline
      </button>

      <hr />
    </div>
  );
};

export default Joke;

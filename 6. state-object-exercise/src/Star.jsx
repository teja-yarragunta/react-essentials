import React from "react";
import starFilled from "/star-filled.png";
import starEmpty from "/star-empty.png";

const Star = (props) => {
  let starIcon = props.isFilled ? starFilled : starEmpty;
  return (
    // access the function from props
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFilled}
      aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
      className="favorite-button"
    >
      <img
        src={starIcon}
        alt={props.isFilled ? "filled star icon" : "empty star icon"}
        className="favorite"
      />
    </button>
  );
};

export default Star;

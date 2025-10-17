import React from "react";

const Card = (props) => {
  // Card = ({imb, name, phone, email}) => {} -> props destructuring
  return (
    <article className="card">
      <img src={props.img} alt="cat-image" />
      <h3>{props.name}</h3>
      <div className="card-info">
        <img src="phone-icon.png" alt="phone-icon" />
        <p>{props.phone}</p>
      </div>
      <div className="card-info">
        <img src="mail-icon.png" alt="mail-icon" />
        <p>{props.email}</p>
      </div>
    </article>
  );
};

export default Card;

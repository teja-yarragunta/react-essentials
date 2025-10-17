import React, { useState } from "react";
import avatar from "/user.png";
import Star from "./Star";

const App = () => {
  const [contact, setContact] = useState({
    firstName: "Gol D",
    lastName: "Roger",
    phone: "+91 9879876876",
    email: "goldroger@outlook.com",
    isFavorite: false,
  });

  const toggleFavorite = () => {
    setContact((prevContact) => ({
      // return {
      //   isFavorite: !prev.isFavorite,
      // }; // we are returning only one object item here
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  };

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          {/* <Star isFilled={contact.isFavorite} onClick={toggleFavorite} /> */}
          {/* here Star is a component, it's not a DOM element, so onClick here is not a event listener, it's just a property we are sending through props, better to name something other than e listeners */}
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
};

export default App;

import React from "react";
import Header from "./components/Header";
import data from "./data";
import Entry from "./components/Entry";

const App = () => {
  // const entryElements = data.map((e) => {
  //   return (
  //     <Entry
  //       key={e.id} // it has to be named key
  //       img={e.img}
  //       title={e.title}
  //       country={e.country}
  //       googleMapsLink={e.googleMapsLink}
  //       dates={e.dates}
  //       text={e.text}
  //     />
  //   );
  // });

  // const entryElements = data.map((e) => {
  //   return (
  //     <Entry
  //       key={e.id} // it has to be named key
  //       e={e}
  //     />
  //   );
  // });

  const entryElements = data.map((e) => {
    return (
      <Entry
        key={e.id} // it has to be named key
        {...e}
      />
    );
  });

  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
};

export default App;

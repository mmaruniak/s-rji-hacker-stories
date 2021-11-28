import React from "react";
import "./App.css";

const App = () => (
  <div>
    <h1>Hacker Stories</h1>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    <hr />
    <Header />
  </div>
);

const Header = () => {
  const header1 = "React is fun!";
  const header2 = "React is sometimes hard!";

  return (
    <div>
      <h2> {header1} </h2>
      <h3> {header2} </h3>
    </div>
  );
};

export default App;

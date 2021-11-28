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

const Header = () => (
  <div>
    <h2> React is fun!</h2>
    <h3> React is fun!</h3>
  </div>
);

export default App;

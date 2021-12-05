import React from "react";
import "./App.css";

const App = () => (
  <div>
    <h1>Hacker Stories</h1>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    <hr />
    <Header1 title="React is fun" />
    <Header2 title="But sometimes hard to learn" />
  </div>
);

const Header1 = (props) => <h1> {props.title}</h1>;

const Header2 = (props) => <h2> {props.title}</h2>;

export default App;

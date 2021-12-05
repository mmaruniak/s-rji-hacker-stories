import React from "react";
import "./App.css";

const App = () => (
  <div>
    <h1>Hacker Stories</h1>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    <hr />
    <Header title="React is fun" />
  </div>
);

const Header = (props) => <h1> {props.title}</h1>;

export default App;

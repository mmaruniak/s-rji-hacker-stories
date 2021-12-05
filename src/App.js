import React from "react";
import "./App.css";

const App = () => {
  const handleTextChange = (event) => alert(event.target.value);

  return (
    <div>
      <h1>Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleTextChange} />
      <hr />
      <Header />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <h2> React is fun!</h2>
      <h3> React is fun!</h3>
    </div>
  );
};

export default App;

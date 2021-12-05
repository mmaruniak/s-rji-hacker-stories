import React from "react";
import "./App.css";

const App = () => {
  //const handleTextChange = (event) => alert(event.target.value);

  const handleBlur = (event) =>
    alert(`Do you want to save ${event.target.value}?`);

  return (
    <div>
      <h1>Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onBlur={handleBlur} />

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

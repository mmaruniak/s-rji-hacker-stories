import React from "react";

function greetLion(lionName) {
  return `Hello ${lionName}`;
}

function App() {
  return (
    <div>
      <h1>{greetLion("Mike")}</h1>
    </div>
  );
}

export default App;

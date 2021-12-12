import React from "react";

function App() {
  const cityArray = ["London", "New York", "Berlin", "Wiesbaden"];
  const [city1, city2] = cityArray;

  return (
    <div>
      <h2>{city1}</h2>
      <h2>{city2}</h2>
    </div>
  );
}

export default App;

import React from "react";

const getCities = () => {
  return ["London", "Miami", "Berlin", "Wiesbaden"];
};

function App() {
  const [city1, city2] = getCities();

  return (
    <div>
      <h2>{city1}</h2>
      <h2>{city2}</h2>
    </div>
  );
}

export default App;

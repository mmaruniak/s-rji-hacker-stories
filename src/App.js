import React from "react";

function App() {
  const [cityState, setCityState] = React.useState("London");

  const handleButtonClick = (event) => {
    const newCity = "New York";
    setCityState(newCity);
  };

  return (
    <div>
      <h1>Set my favorite city </h1>
      <input type="button" onClick={handleButtonClick} value="Set City"></input>
      <h2>My favorite city is {cityState}</h2>
    </div>
  );
}

export default App;

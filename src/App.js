import React from "react";

function App() {
  const [cityState, setCityState] = React.useState("London");

  const handleButtonClick = () => {
    //
  };

  return (
    <div>
      <h1>Set my favorite city </h1>
      <h2>My favorite city is {cityState}</h2>
    </div>
  );
}

export default App;

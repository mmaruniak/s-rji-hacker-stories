import React from "react";

const App = () => {
  const [cityState, setCityState] = React.useState("");

  const textChange = (event) => {
    setCityState(event.target.value);
  };

  return (
    <div>
      <h1>Set my favorite city </h1>
      <City City={cityState} />
      <CityInput textChange={textChange} />
    </div>
  );
};

const CityInput = ({ textChange }) => {
  return (
    <div>
      <input type="text" id="idCity" onChange={textChange} />
    </div>
  );
};

const City = ({ City }) => {
  return <h2> my favourite city is {City}</h2>;
};

export default App;

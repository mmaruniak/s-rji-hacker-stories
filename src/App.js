import React from "react";

const App = () => {
  const [cityState, setCityState] = React.useState(
    localStorage.getItem("city") || "Turkana"
  );

  const textChange = (event) => {
    setCityState(event.target.value);
  };

  React.useEffect(() => localStorage.setItem("city", cityState), [cityState]);

  return (
    <div>
      <h1>Set my favorite city </h1>
      <City City={cityState} />
      <CityInput textChange={textChange} value={cityState} />
    </div>
  );
};

const CityInput = (props) => {
  return (
    <div>
      <input
        type="text"
        id="idCity"
        onChange={props.textChange}
        value={props.value}
      />
    </div>
  );
};

const City = (props) => {
  return <h2> my favourite city is {props.City}</h2>;
};

export default App;

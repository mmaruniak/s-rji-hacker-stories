import React from "react";

const App = () => {
  const [cityState, setCityState] = React.useState("");

  const textChange = (event) => {
    setCityState(event.target.value);
  };

  return (
    <div>
      <h1>Set my favorite city </h1>
      <h2> my favourite city is {cityState}</h2>
      <City textChange={textChange} />
    </div>
  );
};

const City = (props) => {
  return (
    <div>
      <input type="text" id="idCity" onChange={props.textChange} />
    </div>
  );
};

export default App;

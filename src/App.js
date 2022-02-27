import React from "react";

const App = () => {
  const [cityState, setCityState] = React.useState("");

  const textChange = (event) => {
    alert(event.target.value);
  };

  return (
    <div>
      <h1>Set my favorite city </h1>
      <City textChange={textChange} />
    </div>
  );
};

const City = (props) => {
  return (
    <div>
      <h2> my favourite city is </h2>
      <input type="text" id="idCity" onChange={props.textChange} />
    </div>
  );
};

export default App;

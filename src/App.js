import React from "react";
import "./App.css";

const App = () => {
  const [personState, setPersonState] = React.useState({
    firstName: "Mike",
    lastName: "Maischberger",
  });

  const onTextChange = (event) => {
    var controlValue = event.target.value;
    var controlName = event.target.name;

    setPersonState({
      ...personState,
      [controlName]: controlValue,
    });
  };

  const LabelInput = ({ id, label, value, name, onInputChange }) => {
    return (
      <div className="labelInput">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          type="text"
          value={value}
          onChange={onInputChange}
        ></input>
      </div>
    );
  };

  // const ButtonInput = ({ label }) => {
  //   return (
  //     <div className="buttonInput">
  //       <input type="button" value={label} />
  //     </div>
  //   );
  // };

  function PersonForm({ personState, onTextChange }) {
    return (
      <div>
        <LabelInput
          id="txtFirstName"
          label="First Name"
          name="firstName"
          value={personState.firstName}
          onInputChange={onTextChange}
        />
        <LabelInput
          id="txtLastName"
          label="Last Name"
          name="lastName"
          value={personState.lastName}
          onInputChange={onTextChange}
        />
      </div>
    );
  }

  return (
    <div className="container">
      <h1> Please enter your personal information </h1>
      <PersonForm personState={personState} onTextChange={onTextChange} />
    </div>
  );
};

export default App;

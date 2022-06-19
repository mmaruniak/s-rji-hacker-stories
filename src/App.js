import React from "react";
import "./App.css";

const App = () => {
  const [personState, setPersonState] = React.useState({
    firstName: "Mike",
    lastName: "Maischberger",
  });

  const onTextChange = (event) => {
    const { name, value } = event.target;
    console.log("controlName" + name);
    console.log("controlValue" + value);
    setPersonState({
      ...personState,
      [name]: value,
    });

    console.log(personState);
  };

  // const ButtonInput = ({ label }) => {
  //   return (
  //     <div className="buttonInput">
  //       <input type="button" value={label} />
  //     </div>
  //   );
  // };

  return (
    <div className="container">
      <h1> Please enter your personal information </h1>
      <PersonForm personState={personState} onTextChange={onTextChange} />
    </div>
  );
};

const PersonForm = ({ personState, onTextChange }) => {
  return (
    <form>
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
    </form>
  );
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

export default App;

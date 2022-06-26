import React from "react";
import "./App.css";

const App = () => {
  const [personState, setPersonState] = React.useState({
    firstName: "Mike",
    lastName: "",
    zip: "",
    city: "",
  });

  const onTextChange = (event) => {
    const { name, value } = event.target;
    setPersonState({
      ...personState,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <Header headerText="Please enter your personal information"></Header>
      <PersonForm personState={personState} onTextChange={onTextChange} />
      <Summary personState={personState} />
    </div>
  );
};

const Header = ({ headerText }) => <h1>{headerText}</h1>;

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
      <LabelInput
        id="txtZip"
        label="Zip"
        name="zip"
        value={personState.zip}
        onInputChange={onTextChange}
      />
      <LabelInput
        id="txtCity"
        label="City"
        name="city"
        value={personState.city}
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

const Summary = ({ personState }) => {
  return (
    <>
      <h2> Summary </h2>
      <span> {personState.firstName}</span>
      <span> {personState.lastName}</span>
      <span> {personState.zip}</span>
      <span> {personState.city}</span>
    </>
  );
};

export default App;

import React from "react";
import "./App.css";

function App() {
  const [personState, setPersonState] = React.useState("");

  return (
    <div className="container">
      <h1> Please enter your personal information </h1>
      <PersonForm />
    </div>
  );
}

const onInputChange = () => {
  alert("InputChanged");
};

function LabelInput({ label, value, onInputChange }) {
  return (
    <div className="labelInput">
      <label htmlFor="textInput"> {label}</label>
      <input
        id="textInput"
        type="text"
        value={value}
        onChange={onInputChange}
      ></input>
    </div>
  );
}

function ButtonInput({ label }) {
  return (
    <div className="buttonInput">
      <input type="button" value={label} />
    </div>
  );
}

function PersonForm({ label }) {
  return (
    <div>
      <LabelInput label="First Name" value="" />
      <LabelInput label="Last Name" value="" />
      <LabelInput label="Date of Birth" value="" />
      <LabelInput label="City of Birth" value="" />
      <LabelInput label="Zip" value="" />
      <LabelInput label="City" value="" />
      <ButtonInput label="Submit" />
    </div>
  );
}

export default App;

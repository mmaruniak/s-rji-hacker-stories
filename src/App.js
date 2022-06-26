import React from "react";

function App() {
  const [cityState, setCityState] = React.useState("");

  const [personState, setPersonState] = React.useState({
    firstName: "",
    lastName: "",
    zip: "",
    city: "",
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setPersonState({
      ...personState,
      [name]: value,
    });
  };

  return (
    <div>
      <Header headerText="Please enter your personal information" />
      <PersonForm personState={personState} onInputChange={onInputChange} />
      <Summary />
    </div>
  );
}

const Header = ({ headerText }) => <h1>{headerText}</h1>;

const PersonForm = ({ personState, onTextChange }) => {
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
    </div>
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

const Summary = () => {
  return <h2> Summary</h2>;
};

export default App;

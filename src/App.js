import React from "react";

function App() {
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

const PersonForm = ({ personState, onInputChange }) => {
  return (
    <div>
      <LabelInput
        id="txtFirstName"
        label="First Name"
        name="firstName"
        value={personState.firstName}
        onInputChange={onInputChange}
      />
      <LabelInput
        id="txtLastName"
        label="Last Name"
        name="lastName"
        value={personState.lastName}
        onInputChange={onInputChange}
      />
      <LabelInput
        id="txtZip"
        label="Zip"
        name="zip"
        value={personState.zip}
        onInputChange={onInputChange}
      />
      <LabelInput
        id="txtCity"
        label="City"
        name="city"
        value={personState.city}
        onInputChange={onInputChange}
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

import React from "react";

function App() {
  const [cityState, setCityState] = React.useState("");

  return (
    <div>
      <Header headerText="Please enter your personal information" />
      <PersonForm />
      <Summary />
    </div>
  );
}

const Header = ({ headerText }) => <h1>{headerText}</h1>;

const PersonForm = () => {
  return <h2> PersonForm</h2>;
};

const Summary = () => {
  return <h2> Summary</h2>;
};

export default App;

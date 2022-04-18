import React from "react";

const Welcome = {
  name: "Thomas",
  greeting: "Hey",
  title: "Mr.",
};

const Address = {
  city: "Berlin",
  street: "Kreuzberger Ring",
};

function App() {
  // spread operator
  const welcomeAddress = { ...Welcome, ...Address };

  //rest operator
  const { greeting, ...addressWithTitle } = welcomeAddress;

  console.log(welcomeAddress);
  return (
    <div>
      {greeting} {addressWithTitle.title} {addressWithTitle.name} you live in{" "}
      {addressWithTitle.city} {addressWithTitle.street}
    </div>
  );
}

export default App;

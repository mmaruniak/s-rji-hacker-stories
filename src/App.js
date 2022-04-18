import React from "react";

const Welcome = {
  greeting: "Hey",
  title: "Thomas!",
};

const Address = {
  city: "Berlin",
  street: "Kreuzberger Ring",
};

function App() {
  const welcomeAddress = { ...Welcome, ...Address };
  console.log(welcomeAddress);
  return (
    <div>
      {welcomeAddress.greeting} {welcomeAddress.title}
    </div>
  );
}

export default App;

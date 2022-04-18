import React from "react";

const Welcome = {
  greeting: "Hey",
  title: "React!",
};

function App() {
  const { greeting, title } = Welcome;
  return (
    <div>
      <h1>
        {greeting} {title}
      </h1>
    </div>
  );
}

export default App;

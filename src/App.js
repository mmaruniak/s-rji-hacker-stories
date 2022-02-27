import React from "react";

function App() {
  const [cityState, setCityState] = React.useState("");

  return (
    <div>
      <h1>Set my favorite city </h1>
      <City />
    </div>
  );
}

function City() {
  return <h2> my favourite city is London</h2>;
}

export default App;

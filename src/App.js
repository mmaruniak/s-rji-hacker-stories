import React from "react";
import "./App.css";

const restaurantList = [
  {
    name: "Happy Elefant",
    location: "Lodwar",
    owner: "Peter Miller",
    stars: 4,
    objectID: 0,
  },
  {
    name: "Late Tiger",
    location: "Lodwar",
    owner: "John Finch",
    stars: 5,
    objectID: 1,
  },
  {
    name: "Happy Monkey",
    location: "Turkana",
    owner: "John Price",
    stars: 2,
    objectID: 2,
  },
  {
    name: "Evening Shadow",
    location: "Marsabit",
    owner: "Peter McKenzy",
    stars: 4,
    objectID: 3,
  },
];

function App() {
  const filteredCities = restaurantList.filter(function (city) {
    return city.stars > 4;
  });

  return (
    <div>
      <h1>Hacker Stories</h1>
      <hr />
      {filteredCities.map(function (item) {
        return (
          <div key={item.objectID} className="container">
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.location}</span>
            <span>{item.name}</span>
            <span>{item.stars}</span>
            <span>{item.owner}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;

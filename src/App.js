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
];

function App() {
  return (
    <div>
      <Header />
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr />
      <RestaurantList />
    </div>
  );
}

function Header() {
  return <h1>Lodwars Restaurants</h1>;
}

function RestaurantList() {
  return restaurantList.map(function (item) {
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
  });
}
export default App;

import React from "react";
import "./App.css";

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem("search") || "React"
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // called on initial rendering and when
  // a property in the dependency array changes
  // here: [searchTerm]
  // an empty array will cause the useEffect
  // hook to be called once
  // leaving out the depency array will cause the useEffect
  // hook to be called on every render operation
  React.useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const InputWithLabel = ({
    id,
    label,
    value,
    type = "text",
    onInputChange,
  }) => (
    <>
      <label htmlFor={id}> {label}: </label>
      <input id={id} type={type} value={value} onChange={onInputChange} />
    </>
  );

  return (
    <div>
      <h1>Hacker Stories</h1>
      <InputWithLabel
        id="search"
        value={searchTerm}
        label="Search"
        onInputChange={handleSearch}
      />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

const List = ({ list }) => list.map((item) => <Item item={item} />);

const Item = ({ item }) => (
  <div key={item.objectID} className="container">
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </div>
);

export default App;

// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/Card-list/Card-list.components";
import SearchBox from "./components/Search-box/Search-box.components";

import React from "react";

function App(props) {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // console.log({ searchField });
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
    // console.log("effect fired");
  }, [monsters, searchField]);

  // console.log(filteredMonsters);
  console.log("render");
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex </h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monster"
        className="monster-search-box"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;

///. Class component below

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     // console.log("constructor");
//   }
//   componentDidMount() {
//     // console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           }
//           // () => {
//           //   console.log(this.state);
//           // }
//         )
//       );
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     // console.log(this.props.searchField);
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     // console.log("render");
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monsters) => {
//       return monsters.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex </h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="Search Monster"
//           className="monster-search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }
// export default App;

import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: '1q1w1e',
        },
        {
          name: "Frank",
          id: '1q1w1r',
        },
        {
          name: "Jacky",
          id: '1q1w1t',
        },
        {
          name: "Andrei",
          id: '1q1w1a',
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        }
      </div>
    );
  }
}

export default App;

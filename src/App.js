import "./App.css";
import Container from "./Components/Containerr/Container";
import React from "react";
import Todo from "./Components/Todolist/Todo";


class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Container>
          <Todo />
        </Container>
      </div>
    );
  }
}

export default App;

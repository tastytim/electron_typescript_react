import React from "react";
import { Component } from "react";
import { Todos , Tod} from "./../../utils/Types";
const { ipcRenderer } = window.require("electron");


class MainWindow extends Component {
  state: typeof Todos = {
    todos: [],
  };
  componentDidMount() {
    ipcRenderer.send("todo:list");
    ipcRenderer.on("todo:list", (_event: any, data: typeof Todos) => {
      this.setState({ todos: data });
    });
    ipcRenderer.on("todo:add", (_event: any, data: typeof Tod) => {
      if (Array.isArray(this.state.todos)) {
        this.setState({ todos: [...this.state.todos, data] });
      } else {
        console.log('arr variable does not store an array');
      }
      
    });
    ipcRenderer.on("todo:clear", (_event: any) => {
      this.setState({ todos: [] });
    });
  }
  renderTodos = () => {
    return this?.state?.todos?.map((todo) => <li key={todo.id}>{todo.text}</li>) ;
  };
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>{this.renderTodos()}</ul>
      </div>
    );
  }
}
export default MainWindow;

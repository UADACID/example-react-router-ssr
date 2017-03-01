import React, { Component } from 'react';
import { IndexRoute, Route } from 'react-router';
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

class HomeContainer extends Component {
  render(){
    return(
      <div>blah</div>
    )
  }
}

class WorkContainer extends Component {
  render(){
    return(
      <div>blah</div>
    )
  }
}

export const renderRoutes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomeContainer} />
    <Route path="work">
      <IndexRoute component={WorkContainer} />
    </Route>
  </Route>
)

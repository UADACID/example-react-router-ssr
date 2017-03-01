import React, { Component } from 'react';
import { Link } from 'react-router';
export default class App extends Component {
  // getInitialState() {
  //   ItemsSub = Meteor.subscribe("items", () => {
  //     this.setState({isReady: true});
  //   });
  //
  //   return {
  //     isReady: false,
  //   };
  // }

  render() {
    return (
      <div>
        <header>
        ini header
        Go to: <Link to="/another">another page</Link>
        </header>

        {this.props.children}

        <footer>ini Footer</footer>
      </div>
    );
  }
// });
}

import React, { Component } from 'react';

import './App.css';
import MessageList from './messages/message-list';

/**
 * Here we've created a React Component by defining a JavaScript class that is a subclass of React.Component.
 * We've also defined a render function that returns a JSX element. You can place additional JSX code within the <div> tags.
 */
class App extends Component {
  render() {
    return (
      <MessageList />
    )
  }
}

export default App;
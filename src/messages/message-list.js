import React, { Component } from 'react';

import MessageView from './message-view';

class MessageList extends Component {

  state = {
    messages: [
      {
        from: 'Martha',
        message: 'I will be traveling soon',
        status: 'read'
      },
      {
        from: 'Joe',
        message: 'Rogan Podcast',
        status: 'unread'
      },
      {
        from: 'Jacob',
        message: 'Talk later. Have a great day!',
        status: 'read'
      }
    ]
  }

  render() {
    const messages = this.state.messages.map(function(message, index) {
      return(
        <MessageView key={index} message={message} />
      )
    })
    
    return (
      <div>
        <h1>List of Messages</h1>
        {messages}
      </div>
    )
  }
}

export default MessageList;
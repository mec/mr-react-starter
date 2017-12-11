import React from 'react';
import Message from '../components/message';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'hello world.'
    };
  }
  test = () => 10;
  render() {
    return <Message message={this.state.message} />;
  }
}

export default App;

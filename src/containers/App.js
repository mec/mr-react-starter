import React from 'react';
import Message from '../components/message';
import { injectGlobal } from 'styled-components';
import reset from '../style/reset.js';

injectGlobal`
  ${reset}
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    height: 100%;
  }
  body {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 100%;
    font-family: $systemFontStack;
    font-weight: 200;
    background-color: #3A3A3A;
    color: #fff;
    & > section {
      text-align: center;

    }
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'hello world.'
    };
  }
  handleThing = () => {
    console.log('thing has been handled.');
    const message = this.state.message !== 'Ouch!' ? 'Ouch!' : 'Hello world.';
    this.setState({
      message: message
    });
  }
  render() {
    return <Message message={this.state.message} handler={this.handleThing} />;
  }
}

export default App;

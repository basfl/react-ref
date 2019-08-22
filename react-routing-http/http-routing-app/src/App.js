import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

//import Blog from './containers/Blog/Blog';
import Content from './containers/content'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Article  from '../common/Article';

class App extends Component {
  render() {
    return (
      <div className="About">
        <Article artName="关于" artContent="另外还写过一个v2ex-vue：https://github.com/bergwhite/v2ex-vue"></Article>
      </div>
    );
  }
}

export default App;

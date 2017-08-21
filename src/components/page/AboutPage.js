import React, { Component } from 'react';
import Article  from '../common/Article';

class App extends Component {
  render() {
  const fullContent = `项目使用React、React-router、Axios、ANTD UI进行开发。
                      使用Nginx代理V2EX API并支持CORS跨域。
                      另外还写过一个V2EX项目，v2ex-vue：https://github.com/bergwhite/v2ex-vue。
                      找工作，北京。联系方式：YmVyZ3doaXRlc0BnbWFpbC5jb20=。`
    return (
      <div className="About">
        <Article artName="关于" artContent={fullContent}></Article>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { Row, Col, Menu, Icon } from 'antd';
import ArticleListPage from './components/page/ArticleListPage';
import ArticlePage from './components/page/ArticlePage';
import AboutPage from './components/page/AboutPage';
import NodePage from './components/page/NodePage';

class App extends Component {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {

    const forkStyle = {
      display: 'block',
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 999
    }

    return (
      <div>
        <div>
          <a style={forkStyle} className="fork-me-wrap" href="https://github.com/bergwhite/v2ex-react" target="_blank" rel="noopener noreferrer">
            <img style={{display:'block', width: '100px', height: '100px'}} alt="fork" className="fork-me" src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" />
          </a>
        </div>
        <Row>
          <Col span={8} style={{textAlign: 'center', lineHeight:'46px'}}>
            V2EX-REACT
          </Col>
          <Col span={16}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="mainNav">
                <Link to="/">
                  <Icon type="home" />首页
                </Link>
              </Menu.Item>
              <Menu.Item key="latestNav">
                <Link to="/latest">
                  <Icon type="message" />最新
                </Link>
              </Menu.Item>
              <Menu.Item key="hotNav">
                <Link to="/hot">
                  <Icon type="area-chart" />热门
                </Link>
              </Menu.Item>
              <Menu.Item key="allNav">
                <Link to="/all">
                  <Icon type="tags" />全部
                </Link>
              </Menu.Item>
              <Menu.Item key="aboutNav">
                <Link to="/about">
                  <Icon type="github" />关于
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div style={{width: '96%', margin: 'auto', marginTop:'40px'}}>
                <Route exact path="/" component={ArticleListPage}/>
                <Route path="/latest" component={ArticleListPage}/>
                <Route path="/hot" component={ArticleListPage}/>
                <Route path="/node/:id" component={ArticleListPage}/>
                <Route path="/user/:id" component={ArticleListPage}/>
                <Route path="/post/:id" component={ArticlePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/all" component={NodePage}/>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  /*render() {
    return (
      <div className="App">
        <Link to="/go">go</Link>
        <Link to="/to">to</Link>
        <Route path="/go" component={Go}/>
        <Route path="/to" component={To}/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }*/
}

export default App;

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Card, Avatar, Row, Col}  from 'antd';
import isMobile  from '../../util/isMobile';

class App extends Component {
  constructor(props) {
    super(props);
    const isMobileState = isMobile()
    this.state = {
      artName: this.props.artName,
      artContent: this.props.artContent,
      nodeTitle: this.props.nodeTitle,
      nodeName: this.props.nodeName,
      isMobile: isMobileState
    };
  }
  componentDidMount() {
  }
  render() {
    const artName = this.state.artName
    const artContent = this.state.artContent
    const nodeName = this.state.nodeName
    let nodeTitle = this.state.nodeTitle
    let linkImg = ''
    let linkUser = ''
    let userInfo = ''
    let userInfoDetail = ''
    const layout = {}
    layout.img = this.state.isMobile ? 4 : 1
    layout.name  = this.state.isMobile ? 4 : 2
    layout.reply  = this.state.isMobile ? 6 : 2
    if (this.props.userInfo) {
      userInfoDetail = this.props.userInfo
      if (!this.props.isArticleDetail) {
        linkImg = <Avatar src={userInfoDetail.avatar_mini} />
        linkUser = <div>{userInfoDetail.username}</div>
      }
      else {
        linkImg = (<Link to={`/user/${userInfoDetail.username}`}>
            <Avatar src={userInfoDetail.avatar_mini} />
          </Link>)
        linkUser = (<Link to={`/user/${userInfoDetail.username}`}>
            <div>{userInfoDetail.username}</div>
          </Link>)
        nodeTitle = (<Link to={`/node/${nodeName}`}>
             {this.state.nodeTitle}
          </Link>)
      }
      userInfo = <Row style={{margin: '20px 0 0 0'}}>
        <Col span={layout.img}>
          {linkImg}
        </Col>
        <Col span={layout.name}>
          {linkUser}
        </Col>
        <Col span={layout.reply}>
          回复：{this.props.replies}
        </Col>
      </Row>
    }
    return (
      <Card extra={nodeTitle} title={artName} style={{ width: '100%', margin:'0 0 20px 0', color: 'black' }}>
        <div dangerouslySetInnerHTML={{__html: artContent}} />
        {userInfo}
      </Card>
    );
  }
}

export default App;

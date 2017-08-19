import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Card, Avatar, Row, Col}  from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artName: this.props.artName,
      artContent: this.props.artContent,
      nodeTitle: this.props.nodeTitle
    };
  }
  componentDidMount() {
  }
  render() {
    const artName = this.state.artName
    const artContent = this.state.artContent
    const nodeTitle = this.state.nodeTitle
    let linkImg = ''
    let linkUser = ''
    let userInfo = ''
    let userInfoDetail = ''
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
      }
      userInfo = <Row style={{margin: '20px 0 0 0'}}>
        <Col span={1}>
          {linkImg}
        </Col>
        <Col span={2}>
          {linkUser}
        </Col>
        <Col span={2}>
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

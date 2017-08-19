import React, { Component } from 'react';
import {Avatar, Row, Col}  from 'antd';
import { Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: this.props.userInfoName,
        img: this.props.userInfoImg
      },
      userMess: this.props.userMess
    };
  }
  componentDidMount() {

  }
  render() {
    const userInfo = this.state.userInfo
    const userMess = this.state.userMess
    let reply = ''
    if (this.props.replies) {
      reply = <div>回复：{this.props.replies}</div>
    }
    return (
      <div>
      <Row style={{margin: '20px 0 0 32px'}}>
        <Col span={1}>
          <Link to={`/user/${userInfo.name}`}><Avatar src={userInfo.img} /></Link>
        </Col>
        <Col span={2}>
          <Link to={`/user/${userInfo.name}`}>{userInfo.name}</Link>
        </Col>
        <Col span={1}>
          {reply}
        </Col>
      </Row>
      <Row>
        <div style={{padding: '10px 0 20px 32px'}} dangerouslySetInnerHTML={{__html: userMess}} />
      </Row>
      </div>
    );
  }
}

export default App;

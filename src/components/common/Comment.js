import React, { Component } from 'react';
import {Avatar, Row, Col}  from 'antd';
import { Link } from 'react-router-dom'
import isMobile  from '../../util/isMobile';

class App extends Component {
  constructor(props) {
    const isMobileState = isMobile()
    super(props);
    this.state = {
      userInfo: {
        name: this.props.userInfoName,
        img: this.props.userInfoImg
      },
      userMess: this.props.userMess,
      isMobile: isMobileState
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
    const layout = {}
    layout.img = this.state.isMobile ? 4 : 1
    layout.name  = this.state.isMobile ? 4 : 2
    layout.reply  = this.state.isMobile ? 6 : 2
    return (
      <div>
      <Row style={{margin: '20px 0 0 32px'}}>
        <Col span={layout.img}>
          <Link to={`/user/${userInfo.name}`}><Avatar src={userInfo.img} /></Link>
        </Col>
        <Col span={layout.name}>
          <Link to={`/user/${userInfo.name}`}>{userInfo.name}</Link>
        </Col>
        <Col span={layout.reply}>
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

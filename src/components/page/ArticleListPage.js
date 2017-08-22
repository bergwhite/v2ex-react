import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Article  from '../common/Article';
import getData  from '../../util/getData';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    console.log(this.props)
    const realUrlTypeList = ['/', 'latest', 'hot']
    const pathName = this.props.location.pathname
    let realUrlType = pathName !== '/' ? pathName.replace('/','') : 'latest'
    let realUrlTypeParams = ''
    if(realUrlTypeList.indexOf(realUrlType) === -1){
      if (pathName.match(/^\/node/)) {
        realUrlType = 'node'
      }
      if (pathName.match(/^\/user/)) {
        realUrlType = 'user'
      }
      realUrlTypeParams = props.match.params.id

    }
    getData.getData(realUrlType, realUrlTypeParams, (e) => {
      const that = this
      that.setState({
        data: e
      })
    })
    console.log(this)
  }
  componentWillMount() {
    
  }

  render() {
    let rows = []
    const data = this.state.data || []
    console.log(data)
    const len = data.length
    for(let i = 0; i < len; i++){
      const e = data[i];
      rows.push(<div key={e.id}><Link  to={`/post/${e.id}`}><Article artName={e.title} artContent={e.content_rendered} userInfo={e.member} replies={e.replies} nodeTitle={e.node.title}></Article></Link></div>)
    }
    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default App;

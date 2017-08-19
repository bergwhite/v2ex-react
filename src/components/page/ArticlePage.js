import React, { Component } from 'react';
import Article  from '../common/Article';
import Comment  from '../common/Comment';
import getData  from '../../util/getData';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    const realUrlTypeParams = props.match.params.id
    console.log(realUrlTypeParams)
    getData.getData('article', realUrlTypeParams, (e) => {
      const that = this
      that.setState({
        data: e
      })
    })
    getData.getData('comm', realUrlTypeParams, (e) => {
      const that = this
      that.setState({
        comm: e
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
      rows.push(<Article artName={e.title} artContent={e.content_rendered} userInfo={e.member} replies={e.replies} nodeTitle={e.node.title} isArticleDetail={true} key={e.id}></Article>)
    }
    let commRows = []
    const comm = this.state.comm || []
    console.log(comm)
    const commLen = comm.length
    for(let i = 0; i < commLen; i++){
      const e = comm[i];
      commRows.push(<Comment userInfoName={e.member.username} userInfoImg={e.member.avatar_mini} userMess={e.content_rendered} key={e.id}></Comment>)
    }
    console.log(commRows)
    return (
      <div>
        <div>
          {rows}
        </div>
        <div>
          {commRows}
        </div>
      </div>
    );
  }
}

export default App;

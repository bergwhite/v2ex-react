import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Col, Row, Pagination}  from 'antd';
import Article  from '../common/Article';
import getData  from '../../util/getData';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    const realUrlType = 'nodeAll'
    getData.getData(realUrlType, '', (e) => {
      const that = this
      const len = e.length
      const count = Math.ceil(len / 12)
      console.log(count)
      that.setState({
        data: e
      })
      that.setState({
        pageCurrent: 1
      })
      that.setState({
        pageCount: count
      })
    })
    console.log(this)
  }

  pageOnChange(page, pageSize) {
    this.setState({
      pageCurrent: page
    })
    // this.pushHistory(`/user/bw2`)
  }

  pushHistory(url) {
    const that = this
    console.log(that)
    // this.props.history.push(url)
  }

  getArr() {
    let rows = []
    const data = this.state.data || []
    const len = data.length
    const pageSize = 12
    const pageCurrent = this.state.pageCurrent
    const pageNextVal = pageCurrent + 1
    const pageNext = pageNextVal * pageSize > len ? len : pageNextVal * pageSize
    for(let i = pageCurrent * pageSize; i < pageNext; i++){
      const e = data[i];
      rows.push(<Col span={4}  key={e.id} style={{marginBottom:'20px'}}><Link  to={`/node/${e.name}`}><Article artName={e.name} artContent={e.header || e.footer || 'empty...'}></Article></Link></Col>)
    }
    return {rows, data, len, pageSize, pageCurrent, pageNextVal, pageNext}
  }

  splitArr(arr) {
    const arrMid = arr.length / 2
    const rowsOne = arr.slice(0, arrMid)
    const rowsTwo = arr.slice(arrMid)
    return {rowsOne, rowsTwo}
  }

  render() {
    const {rows, len, pageSize, pageCurrent} = this.getArr()
    const {rowsOne, rowsTwo} = this.splitArr(rows)
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row style={{ padding: '0 0 30px 0' }}>
          <Pagination onChange={this.pageOnChange.bind(this)} simple defaultCurrent={pageCurrent} defaultPageSize={pageSize} total={len} />
        </Row>
        <Row gutter={16}>
          {rowsOne}
        </Row>
        <Row gutter={16}>
          {rowsTwo}
        </Row>
      </div>
    );
  }
}

export default App;

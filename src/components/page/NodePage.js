import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Col, Row, Pagination}  from 'antd';
import Article  from '../common/Article';
import getData  from '../../util/getData';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isMobile: false
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

  componentWillMount() {
    this.isMobile()
  }

  pageOnChange(page, pageSize) {
    this.setState({
      pageCurrent: page
    })
  }

  isMobile() {
    const checkList = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
    let checkState = false
    checkList.map((e) => {
      if(navigator.userAgent.indexOf(e) !== -1) checkState = true
      return '';
    })
    checkState && this.setState({isMobile: checkState})
  }

  getArr() {
    let rows = []
    const data = this.state.data || []
    const len = data.length
    const perGrid = this.state.isMobile ? 12 : 4
    const pageSize = 12
    const pageCurrent = this.state.pageCurrent
    const pageNextVal = pageCurrent + 1
    const pageNext = pageNextVal * pageSize > len ? len : pageNextVal * pageSize
    for(let i = pageCurrent * pageSize; i < pageNext; i++){
      const e = data[i];
      rows.push(<Col span={perGrid}  key={e.id} style={{marginBottom:'20px'}}><Link  to={`/node/${e.name}`}><Article artName={e.name} artContent={e.header || e.footer || 'empty...'}></Article></Link></Col>)
    }
    return {rows, data, len, pageSize, pageCurrent, pageNextVal, pageNext }
  }

  splitArr(arr) {
    const perLen = this.state.isMobile ? 2 : 6
    const all = []
    const line = arr.length / perLen
    for(let ilineStart = 1; ilineStart <= line; ilineStart++){
      const start = (ilineStart - 1) * perLen
      const end = ilineStart * perLen
      const rowArr = arr.slice(start, end)
      all.push(<Row gutter={16} key={ilineStart}>
          {rowArr}
        </Row>)
    }
    return all
  }

  render() {
    const {rows, len, pageSize, pageCurrent} = this.getArr()
    const all = this.splitArr(rows)
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row style={{ padding: '0 0 30px 0' }}>
          <Pagination onChange={this.pageOnChange.bind(this)} simple defaultCurrent={pageCurrent} defaultPageSize={pageSize} total={len} />
        </Row>
        {all}
      </div>
    );
  }
}

export default App;

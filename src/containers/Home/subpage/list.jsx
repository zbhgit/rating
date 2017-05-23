import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {getListData} from '../../../fetch/home/home.js'
import ListComponent from '../../../components/list'
import './style.less'
class List extends Component {
  constructor() {
    super()
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
     this.state = {
      data: [],
      hasMore: false
    }
  }
  render() {
    return (
      <div>
        {
          this.state.data.length ? <ListComponent data={this.state.data} /> : <div>加载中...</div>
        }
      </div>
    )
  }
  componentDidMount(){
    // 获取猜你喜欢数据
    this.loadFirstPageData()
  }
  loadFirstPageData(){
    const cityName = this.props.cityName
    const result = getListData(cityName,0)
    this.resultHandle(result)
  }
  resultHandle(result) {
    result.then(res=>{
      return res.json()
    }).then(json=>{
      const hasMore = json.hasMore
      const data = json.data
      this.setState({
        hasMore: hasMore,
        data: data
      })
    })
  }
}
export default List
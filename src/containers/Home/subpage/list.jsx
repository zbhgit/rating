import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {getListData} from '../../../fetch/home/home.js'
import ListComponent from '../../../components/list'
import LoadMore from '../../../components/loadMore'
import './style.less'
class List extends Component {
  constructor() {
    super()
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: [], // 存储列表信息
      hasMore: false, // 是否有更多信息
      isLoadingMore: false, // 记录当前状态下，是否正在加载，true即正在加载，false指加载完成
      page: 1 // 加载下一页的页码

    }
  }
  render() {
    return (
      <div>
        {this.state.data.length
          ? <ListComponent data={this.state.data}/>
          : <div>加载中...</div>
        } 
        {
          this.state.hasMore 
          ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} />
          : ''
        }
      </div>
    )
  }
  componentDidMount() {
    // 获取猜你喜欢数据
    this.loadFirstPageData()
  }
  loadFirstPageData() {
    const cityName = this.props.cityName
    const result = getListData(cityName, 0)
    this.resultHandle(result)
  }
// 加载更多数据
  loadMoreData(){
    // 记录状态
    this.setState({
      isLoadingMore: true
    })
    const cityName = this.props.cityName
    const page = this.state.page
    const result = getListData(cityName,page)
    this.resultHandle(result)
    // 增加page  计数
    this.setState({
      page: page+1,
    })
  }

  // 数据处理
  resultHandle(result) {
    result.then(res => {
      return res.json()
    }).then(json => {
      const hasMore = json.hasMore
      const data = json.data
      this.setState({
        hasMore: hasMore,
        data: this.state.data.concat(data),
        isLoadingMore: false
      })
    })
  }
}
export default List
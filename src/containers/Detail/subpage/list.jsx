import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {getListData} from '../../../fetch/home/home.js'
import ListComponent from '../../../components/list'
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
    console.log(result)
  }

  // 数据处理
  resultHandle(result) {
    result.then(res => {
      return res.json()
    }).then(json => {
      const hasMore = json.hasMore
      const data = [].splice.call(json.data,0,3)
      console.log(data.length)
      this.setState({
        hasMore: hasMore,
        data: this.state.data.concat(data),
        isLoadingMore: false
      })
    })
  }
}
export default List
import React, {Component} from 'react'
import PureRenderMxin from 'react-addons-pure-render-mixin'

import {getAdData} from '../../../fetch/home/home.js'

import HomeAd from '../../../components/HomeAd'

class Ad extends Component {
  constructor() {
    super()
    this.shouldComponentUpdate = PureRenderMxin.shouldComponentUpdate.bind(this);
    this.state = {
      data: []
    }
  }
  render() {

    return (
      <div>
        {this.state.data.length
          ? <HomeAd data={this.state.data}/>
          : <div>正在加载.....</div>
}
      </div>
    )
  }
  componentDidMount() {
  // 获取广告数据
    const result = getAdData()
    result.then((res) => {
      return res.json()
    }).then((json) => {
      const data = json
      if (data.length) {
        this.setState({data: data})
      }
    }).catch(ex=>{
      console.error('获取数据失败')
    })
  }
}
export default Ad
import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class HomeHeader extends Component {
  constructor() {
    super()
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
  }
  render() {
    return (
      <hqader className="header">
        <div className="address">
          <span>{this.props.cityName}</span>
          <i className="icon-angle-down"></i>
        </div>
        <div className="search">
          <i className="icon-search" ></i>          
          <input  type="text" placeholder="请输入关键字"/>
        </div>
        <div className="icon-user user">
        </div>
      </hqader>
    )
  }
}
export default HomeHeader
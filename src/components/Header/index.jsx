import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Header extends React.Component {
  constructor(){
    super()
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    return (
      <div className="common-header">
        <span className="back icon-chevron-left" onClick={this.clickHandler.bind(this)}></span>
        <span className="title">{this.props.title}</span>
      </div>
    )
  }
  clickHandler(){
    // 返回前一页
    window.history.back()
  }
} 

export default Header
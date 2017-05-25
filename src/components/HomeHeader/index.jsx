import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import { hashHistory } from 'react-router'

import SearchInput from '../searchInput/index'
import './style.less'
class HomeHeader extends Component {
  constructor() {
    super()
    this.shouldComponentUpdate = PureRenderMixin
      .shouldComponentUpdate
      .bind(this);
    
  }
  render() {
    return (
      <hqader className="header">
        <Link to="/city">

          <div className="address">
            <span>{this.props.cityName}</span>
            <i className="icon-angle-down"></i>
          </div>
        </Link>
        <div className="search">
          <SearchInput value="" enterHandle={this.enterHandle.bind(this)} />
        </div>
        <div className="icon-user user"></div>
      </hqader>
    )
  }
  enterHandle(value){
     hashHistory.push('/search/all/' + encodeURIComponent(value))
  }

}
export default HomeHeader
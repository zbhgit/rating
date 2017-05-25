import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchInput from '../searchInput'
import {hashHistory} from 'react-router'
import './style.less'

class SearchHeader extends React.Component {
  constructor(){
    super()
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    return (
      <div className="search-header">
        <span className="back icon-chevron-left" onClick={this.clickHandler.bind(this)}></span>
        <SearchInput value={this.props.keyword || ''}  enterHandle={this.enterHandle.bind(this)} />
      </div>
    )
  }
  clickHandler(){
    // 返回前一页
    window.history.back()
  }
  enterHandle(value){
     hashHistory.push('/search/all/' + encodeURIComponent(value))
  }
} 

export default SearchHeader
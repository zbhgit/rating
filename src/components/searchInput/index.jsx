import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class SearchInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      keyWord: ''
    }
  }
  render() {
    return (
      <div className="search">
        <i className="icon-search"></i>
        <input
        type="text"
        placeholder="请输入关键字"
        value={this.state.keyWord}
        onChange={this.changehandle.bind(this)}
        onKeyUp={this.keyUpHandle.bind(this)} />
      </div>
    
    )
  }
  componentDidMount() {
    this.setState({
      keyWord: this.props.value
    })
  }
  changehandle(e) {
    this.setState({
      keyWord: e.target.value
    })
  }
  keyUpHandle(e) {
    if (e.keyCode !== 13) {
      return
    }
    this.props.enterHandle(this.state.keyWord)
  }
}

export default SearchInput
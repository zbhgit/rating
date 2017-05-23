import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class LoadMore extends Component {
  constructor() {
    super()
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className="load-more" ref='wrapper'>
        {
          this.props.isLoadingMore
          ? <span>加载中...</span>
          : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
        }
      </div>
    )
  }

  loadMoreHandle() {
    this.props.loadMoreFn()
  }
  componentDidMount() {
    const loadMoreFn = this.props.loadMoreFn
    const wrapper = this.refs.wrapper
    // 定义定时器id 和 回调函数
    let timeoutId
    let callback = () => {
      const top = wrapper.getBoundingClientRect().top
      const windowHeight = window.screen.height
      // wrapper出现在视口时 加载更多数据
      if (top && top < windowHeight) {
        loadMoreFn()
        console.log(1)
      }
    }

    // 监听滚动事件

    window.addEventListener('scroll', () => {
      if (this.props.isLoadingMore) {
        return
      }
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(callback, 50)
    });
  }
}
export default LoadMore
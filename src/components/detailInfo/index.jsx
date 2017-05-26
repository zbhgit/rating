import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class DeatilInfo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <div className="seller" >
          <div className="seller-content">
            <img className="seller-photo" src={this.props.data.img} alt="" />
            <div className="seller-desc">
              <h2 className="title">{this.props.data.title}</h2>
              <div className="seller-data">
                <span>start</span>
                <span>288条</span>
                <span>￥88/人</span>
              </div>
              <p>双井 <span>重庆火锅</span></p>
              <div className="seller-mark">
                <span>口味:9.0</span>
                <span>环境:9.0</span>
                <span>服务:9.0</span>
              </div>
            </div>
          </div>
          <div className="seller-info clearfix">
            <div className="seller-adress">
              <span>地址：双井北街和南街交汇处</span>
              <span className="arrow">&gt;</span>
            </div>
            <div className="seller-phone clearfix">
              <span>电话：400-12123434</span>
              <span className="arrow">&gt;</span>
            </div>
          </div>
        </div>
      </div>

    )
  }
  componentDidMount() {
    console.dir(this.props.data)
  }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default NotFound
export default DeatilInfo
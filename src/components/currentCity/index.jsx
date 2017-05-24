import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class CurrentCity extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin
      .shouldComponentUpdate
      .bind(this);
  }
  render() {
    let pStyle = {
      fontSize: '30px',
      color: '#383232'
    }
    let spanStyle = {
      fontSize: '15px',
      color: '#c5c5c5'
    }
    return (
      <div style={{textAlign:'center',padding: '35px 0', borderBottom: '1px solid #eeeeee' }}>
        <p style={pStyle}>{this.props.cityName}<span style={spanStyle}>GPS定位</span></p>
      </div>
    )
  }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export export default City
export default CurrentCity

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      phone: ''
    }
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="请输入手机号" onChange={this.changeHandle.bind(this)}
        value={this.state.phone}
        />
        <button onClick={this.clickHandle.bind(this)}>登录</button>
      </div>
    )
  }
  changeHandle(e) {
    this.setState({
      phone: e.target.value
    })
  }

  clickHandle(){
    const username = this.state.phone
    const loginHandle = this.props.loginHandle
    loginHandle(username)

  }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default NotFound
export default Login
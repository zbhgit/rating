import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import BuyAndStore from '../../../components/buyAndStore'

import * as storeActionsFromFile from '../../../actions/store'

class Buy extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      isStore: false
    }
  }
  render() {
    return (
      <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)} />
    )
  }
  componentDidMount() {

  }
  // 检测当前商户是否被收藏
  checkStoreState() {
    const id = this.props.id
    const store = this.props.store
    // 任何一个满足即可
    store.some(item=>{
      if(item.id === id){
        //已经被收藏
        this.setState({
          isStore: true
        })
        return true
      }
      return false
    })
  }
  // 检查登录状态
  loginCheck() {
    const id = this.props.id
    const userinfo = this.props.userinfo
    if(!userinfo.username) {
      // 跳转到登录页面的时候要传入router，以便登陆完回跳
      hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id))
      return false
    }
    return true
  }
  // 购买事件
  buyHandle() {
    //验证登录，未登录则跳转
    const loginFlag = this.loginCheck()
    if(!loginFlag) {
      return 
    }
    hashHistory.push('/user')
  }
  storeHandle() {
     //验证登录，未登录则跳转
    const loginFlag = this.loginCheck()
    if(!loginFlag) {
      return 
    }
    const id =this.props.id
    const storeActios = this.props.storeActios

    if(this.state.isStore) {
      //
      storeActios.rm({id:id})
    } else {
      storeActios.add({id:id})
    }
    this.setState({
      isStore: !this.state.isStore
    })

  }
}

// -------------------redux react 绑定--------------------
function mapStateToProps(state) {
		return {
      userinfo: state.userinfo,
      store: state.store
    }
}

function mapDispatchToProps(dispatch) {
		return {
      storeActios: bindActionCreators(storeActionsFromFile,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy)

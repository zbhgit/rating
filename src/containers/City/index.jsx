import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

// 引入redux相关模块

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {hashHistory} from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js'

import {CITYNAME} from '../../config/localStoreKey.js'
import localStore from '../../util/localStore.js'
import CommonHeader from '../../components/Header'

import CurrentCity from '../../components/currentCity'
import CityList from '../../components/CityList'

import './style.less'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }
    render() {
        return (
            <div>
                <CommonHeader title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList
                    changeFn={this
                    .changeCity
                    .bind(this)}/> {/*<TodoList />*/}
            </div>

        )
    }
    componentDidMount() {}
    changeCity(newCity) {
        if (newCity == null) {
            return
        }
        // 修改redux
        const userinfo = this.props.userinfo
        userinfo.cityName = newCity
        this
            .props
            .userInfoActions
            .update(userinfo)

        // 修改localstor
        localStore.setItem(CITYNAME, newCity)
        // 跳转页面
        hashHistory.push('/')

    }
}

// react 与 redux绑定

function mapStateToProps(state) {
    return {userinfo: state.userinfo}
}
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)

// 使用 require.ensure 异步加载，还不支持 ES6 的 export export default City

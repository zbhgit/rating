import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from './subpage/ad'
import Split from '../../components/split'
import List from './subpage/list'

class Home extends React.Component {
		constructor(props, context) {
				super(props, context);
				this.shouldComponentUpdate = PureRenderMixin
						.shouldComponentUpdate.bind(this);
						
		}
		render() {
				return (
						<div className="animated slideInRight">
								<HomeHeader cityName={this.props.userinfo.cityName}></HomeHeader>
								<Category/>
								<Split />
								<Ad/>
								<Split title="猜你喜欢" />
								<List cityName={this.props.userinfo.cityName} />
						</div>
				)
		}
}

// -------------------redux react 绑定--------------------
function mapStateToProps(state) {
		return {userinfo: state.userinfo}
}

function mapDispatchToProps(dispatch) {
		return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
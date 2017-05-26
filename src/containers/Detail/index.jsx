import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';

import Header from '../../components/Header/index'

import Info from './subpage/info'
import Comment from './subpage/comment'
import List from './subpage/list'
import Split from '../../components/split'
class Detail extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		const id = this.props.params.id
		return (
			<div>
				<Header title="商户详情" />
				<Info id={id} />
				<Split />
				<Comment />
				<Split title='小伙伴们还喜欢'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail)

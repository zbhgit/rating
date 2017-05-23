import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Split extends React.Component {
		constructor(props, context) {
				super(props, context);
				this.shouldComponentUpdate = PureRenderMixin
						.shouldComponentUpdate
						.bind(this);
		}
		render() {
				let options= {
					padding: '7px 0 8px',
					backgroundColor: '#eeeeee'
				}
				let titleStyle = {
					marginLeft: '15px',
					fontSize: '14px',
					color:'#595959',
					lineHeight: '23px'
				}
				return (
						<div style={options}>
							{
								this.props.title ? <h3 style={titleStyle}>{this.props.title}</h3> : ''
							}
						</div>
				)
		}
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export export default NotFound
export default Split
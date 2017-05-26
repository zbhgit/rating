import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CommentItem from '../../../components/commentItem'
class Comment extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    let style = {
      padding: '0 15px',      
      fontSize: "13px",
      color: '#171717',
      lineHeight: '50px',
      borderBottom: '1px solid #eee'
    }
    let all = {
      float: 'right'
    }
    return (
      <div>
        <div className="comment-header clearfix" style={style}>
          <span>网友点评 ( 288条 )</span>
          <span style={all}>查看全部</span>
        </div>
        <CommentItem />
        <CommentItem />
      </div>
    )
  }
  componentDidMount() {

  }
}

export default Comment
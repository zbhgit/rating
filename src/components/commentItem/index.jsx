import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../components/star'

import './style.less'
class CommentItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className="comment-wrap">
        <div className="person clearfix">
          <div className="person-img">
          <span className='persong-lv'>Lv3</span>            
          </div>
        </div>
        <div className="comment-detial">
          <h3 className="title">我是吃货</h3>
          <Star />
          <p className="comment-content">
            我和朋友一起去吃的，真的棒棒滴，胃口棒棒滴环境棒棒滴，不枉此行，已经收藏，要给更多的朋友推荐，因为我是托
          </p>
          <div className="img-wrap">
            <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1495763595&di=a30dc8d5e0fef47aaa9f11dd3baecf25&src=http://img1.qunarzz.com/travel/d4/1509/f1/22710e549b52b.png" alt="" />
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495773672338&di=6182ca963bfea4b52ab9781495866fb5&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd4%2F1411%2F6a%2F6a104a66911fcef0213a9cdb.jpg" alt="" />
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495773672337&di=17c51f2874a4ae5698d51e79a580adde&imgtype=0&src=http%3A%2F%2Fpic5.photophoto.cn%2F20071221%2F0042040377755194_b.jpg" alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default CommentItem
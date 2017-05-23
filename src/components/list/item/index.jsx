import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class Item extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin
      .shouldComponentUpdate
      .bind(this);
  }
  render() {
    const {data} = this.props
    return (
      <div className="item-wrap">
        <img className="image" src={data.img} alt=""/>
        <div className="content">
          <div className="title-wrap">
            <h4>{data.title}</h4>
            <span className="distance">{data.distance}m</span>
          </div>
          <p className="subTitle">{data.subTitle}</p>
          <div className="price-wrap">
            <div>
              <span className="currentPrice">￥{data.currentPrice}</span>
              {data.oldPrice
                ? <span className="oldPrice">￥{data.oldPrice} </span>
                : ''
              }
            </div>

            <span className="number">已售{data.number}</span>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    // console.log(this.props.data);
  }
}

export default Item
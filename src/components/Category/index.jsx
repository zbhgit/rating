import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ReactSwipe from 'react-swipe'
import './style.less'

class Category extends Component {
  constructor() {
    super()
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
    this.state = {
      index: 0
    }
  }
  render() {
    let option = {
      speed: 500,
      auto:2500,
      callback: (index) => {
        this.setState({index: index})
      }
    }
    return (
      <div>
        <ReactSwipe
          className="carousel"
          swipeOptions={option}>
          <div>
            <ul className="carousel-list-up">
              <li>
                <div className="img-wrap">
                </div>
                <span>美食</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>电影</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>酒店</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>休闲娱乐</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>外卖</span>
              </li>
            </ul>
            <ul className="carousel-list-down">
              <li>
                <div className="img-wrap">
                </div>
                <span>火锅</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>丽人</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>度假出行</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>足疗按摩</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>周边游</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="carousel-list-up">
              <li>
                <div className="img-wrap">
                </div>
                <span>景点</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>KTV</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>购物</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>生活服务</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>健身</span>
              </li>
            </ul>
            <ul className="carousel-list-down">
              <li>
                <div className="img-wrap">
                </div>
                <span>美发</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>亲子</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>快餐</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>自助餐</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>酒吧</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="carousel-list-up">
              <li>
                <div className="img-wrap">
                </div>
                <span>日本菜</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>SPA</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>结婚</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>学习培训</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>西餐</span>
              </li>
            </ul>
            <ul className="carousel-list-down">
              <li>
                <div className="img-wrap">
                </div>
                <span>火车机票</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>烧烤</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>家装</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>宠物</span>
              </li>
              <li>
                <div className="img-wrap">
                </div>
                <span>全部分类</span>
              </li>
            </ul>
          </div>
        </ReactSwipe>
        <div className="small-icon">
          <span className={this.state.index === 0 ? 'active': ''}></span>
          <span className={this.state.index === 1 ? 'active': ''}></span>
          <span className={this.state.index === 2 ? 'active': ''}></span>
        </div>
      </div>
    )
  }
}
export default Category
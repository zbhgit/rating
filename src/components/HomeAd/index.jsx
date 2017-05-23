import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class HomeAd extends Component {
  constructor() {
    super()
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className="sell clear-fix">
        <h3>超值特惠</h3>
        <ul className="sell-list-wrap">
          {this.props.data.map((item, index) => {
              return (
                <li key={index} className="sell-item">
                  <h4>{item.title}</h4>
                  <p>{item.example}</p>
                  <div></div>
                </li>
              )
            })
}

        </ul>
      </div>
    )
  }
  componentDidMount() {
    // console.log(this.props.data)
  }
}
export default HomeAd
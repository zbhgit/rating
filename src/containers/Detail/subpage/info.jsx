import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getInfoData} from '../../../fetch/detail/detail.js'


import DeatilInfo from '../../../components/detailInfo/index'
class Info extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      info: false
    }
  }
  render() {
    return (
      <div>
        {
          this.state.info
          ? <DeatilInfo data={this.state.info}/>
          : ''
        }
      </div>
    )
  }
  componentDidMount() {
    //获取详情信息
    let id = this.props.id
    let result = getInfoData(id)
    result.then(res=>{
      return res.json()
    }).then(json=>{
      this.setState({
        info: json
      })
    })
  }
}

export default Info
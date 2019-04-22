import React, {Component} from 'react';
import "./Progress.css"

export default class Progress extends Component {
 
  constructor(props) {
    super(props)

  }
 
  render() {
    let percentageNum = (this.props.percentageNum*100);
    //这个支持css样式响应式的
    let leftPercentage = (1-this.props.percentageNum)*(-100);

    let progress = {

        left:`${leftPercentage}%`,
      };
    return (
      <div className="progress1">
        <div style={progress} className="progress2"></div>
        {/* <div style={div3}>{this.props.progressName}</div>
        <div style={div4}>
          {percentageNum}%
                |
          {this.props.allNum}
        </div> */}
      </div>
    )
  }
}

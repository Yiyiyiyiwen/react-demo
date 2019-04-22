import React, { Component } from 'react';
import "./Play.css"
import needle from "./images/needle.png"
import disc from "./images/disc.png"
import new5 from "./images/new5.png"
import playmusic from "./images/pp.png"

class Play extends Component {

  constructor(props){
    super(props)

    this.state={
      ifpause:true
    }
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(){
    var ifpause = this.state.ifpause

    if(ifpause){
      this.setState({
        ifpause:false
      })
    }
    else{
      this.setState({
        ifpause:true
      })
    }
    console.log(ifpause)

    
  }
  render() {
    const ifpasue = this.state.ifpause
    return (
      <div className="bodycontainer">
        <div className="musiccontainer">
          <div>
            <img src={needle} className={ifpasue==false?"needle pause-needle":"needle"}></img>
          </div>
        </div>
        <div className="dics" onClick={this.handlePlay}>
          <img src={disc} className="dicsimg"></img>
          <img src={new5} className={ifpasue==false?"etc":"etc etctrans"}></img>
          <img src={playmusic} className={ifpasue==false?"pausemusicappear":"pausemusic"}></img>
        </div>

      </div>
    );
  }
}
export default Play;

import React, { Component } from 'react';
import "./Play.css"
import needle from "./images/needle.png"
import disc from "./images/disc.png"
import new5 from "./images/new5.png"
import playmusic from "./images/pp.png"

class Play extends Component {

  constructor(props) {
    super(props)

    this.state = {
      ifpause: true,
      isPlay: false,
      isMuted: false,
      volume: 100,
      allTime: 285,
      currentTime: 0
    }
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    var ifpause = this.state.ifpause

    if (ifpause) {
      this.setState({
        ifpause: false
      })
    }
    else {
      this.setState({
        ifpause: true
      })
    }
    console.log(ifpause)
  }

  controlAudio(type, value) {
    const audio = document.getElementById(`maudio`)
    switch (type) {
      case 'allTime':
        this.setState({
          allTime: audio.duration
        })
        break
      case 'play':
        audio.play()
        this.setState({
          isPlay: true
        })
        break
      case 'pause':
        audio.pause()
        this.setState({
          isPlay: false
        })
        break
      case 'muted':
        this.setState({
          isMuted: !audio.muted
        })
        audio.muted = !audio.muted
        break
      case 'changeCurrentTime':
        this.setState({
          currentTime: value
        })
        audio.currentTime = value
        if (value == audio.duration) {
          this.setState({
            isPlay: false
          })
        }
        break
      case 'getCurrentTime':
        this.setState({
          currentTime: audio.currentTime
        })

        if (audio.currentTime == audio.duration) {
          this.setState({
            isPlay: false
          })
        }
        break
      case 'changeVolume':
        audio.volume = value / 100
        this.setState({
          volume: value,
          isMuted: !value
        })
        break
    }
  }
   
  millisecondToDate(time) {
    const second = Math.floor(time % 60)
    let minite = Math.floor(time / 60)
    // let hour
    // if(minite > 60) {
    //   hour = minite / 60
    //   minite = minite % 60
    //   return `${Math.floor(hour)}:${Math.floor(minite)}:${Math.floor(second)}`
    // }
    return `${minite}:${second >= 10 ? second : `0${second}`}`
  }
  
  render() {
    const {currentTime,allTime} = this.state
    var ifpasue = this.state.ifpause
    const processwidth = 800*(currentTime/allTime)
    var processbarstyle = {
      width:processwidth
    }
    var dotstyle = {
      left:processwidth
    }
    return (
      <div className="bodycontainer">
        <div className="bgimg">
          <img src={new5}></img>
        </div>
        <div className="musiccontainer">
          <div>
            <img src={needle} className={ifpasue == false ? "needle pause-needle" : "needle"}></img>
          </div>
        </div>
        <div className="dics" onClick={this.handlePlay}>
          <img src={disc} className="dicsimg"></img>
          <img src={new5} className={ifpasue == false ? "etc" : "etc etctrans"}></img>
          <img src={playmusic} className={ifpasue == false ? "pausemusicappear" : "pausemusic"}></img>
        </div>

        <div className="playaudio">
          <audio src="http://music.163.com/song/media/outer/url?id=25906124.mp3" controls="controls" loop="loop" autoplay="autoplay"
            onCanPlay={() => this.controlAudio('allTime')}
            onTimeUpdate={(e) => this.controlAudio('getCurrentTime')}
            id="maudio">
            亲 您的浏览器不支持html5的audio标签</audio>
          <div class="music-content-lrc" >
            <div class="music-content-lrc-playing" id="lc">
              暂无歌词
            </div>
          </div>
          <div class="process" id="process">
            <div id="currentTime">
              <span className="current">
                {this.millisecondToDate(currentTime)}
              </span>
            </div>
            <div className="process-bar">
              <div className="rdy" style={processbarstyle}></div>
              <div className="cur">
                <span id="processBtn" className="process-btn c-btn" style={dotstyle}></span>
              </div>
            </div>
            <div id="totalTime">{this.millisecondToDate(allTime)}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Play;

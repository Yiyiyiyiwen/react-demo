import React, { Component } from "react"
import "../SearchBox.css"
class Lyrics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: []
        };


    }
    componentWillMount() {

        var lrc = this.props.lyrics
        var song = this.parseLyric(lrc)

        // console.log(song)
        this.setState({
            song: song
        })
        // var keys = []
        // for (var i in song) {
        //     var txt = song[i]
        //     console.log(txt)
        //     if (!txt) {
        //         txt = "&nbsp;"
        //     }
        //     var li = "<li>" + txt + "</li>"
        //     $('.song').append(li)
        // }
        // let myFirstPromise = new Promise(function (resolve, reject) {
        //     for (var p in song) {
        //         keys.push(p)
        //     }
        //     resolve(keys); //代码正常执行！
        // });
        // myFirstPromise.then(function (successMessage) {
        //     for (var i = 0; i < successMessage.length; i++) {
        //         var txt = song[successMessage[i]]
        //         console.log(txt)
        //         if (!txt) {
        //             txt = "&nbsp;"
        //         }
        //         var li = "<li>" + txt + "</li>"
        //         $('#song').append(li)
        //     }
        // });
    }
    parseLyric(lrc) {
        var lyrics = lrc.split("\n");
        var lrcObj = {};
        for (var i = 0; i < lyrics.length; i++) {
            var lyric = decodeURIComponent(lyrics[i]);
            var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
            var timeRegExpArr = lyric.match(timeReg);
            if (!timeRegExpArr) continue;
            var clause = lyric.replace(timeReg, '');
            for (var k = 0, h = timeRegExpArr.length; k < h; k++) {
                var t = timeRegExpArr[k];
                var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                    sec = Number(String(t.match(/\:\d*/i)).slice(1));
                var time = min * 60 + sec;
                lrcObj[time] = clause;
            }
        }
        return lrcObj;
    }

    render() {
        const { lrc, currentTime } = this.props
        const song = this.state.song
        var songarr = []
        var keys = []
        for (let i in song) {
            songarr.push(song[i])
            keys.push(i)
        }
        console.log(Math.ceil(currentTime))
        return (
            <div>
                <ul className="song">

                    {songarr.map((item, index) => {
                        console.log(keys[index]+" "+keys[index+1])
                        if(Math.floor(currentTime)>keys[index]&&Math.floor(currentTime)<keys[index+1]){
                            return (
                                <li className={(Math.floor(currentTime) - keys[index]) < 10 ? "songactive currentsong" : "songunactive"} >{item}</li>
                            )
                        }
                        else{
                            return(
                                <li className={(Math.floor(currentTime) - keys[index]) < 10 ? "songactive" : "songunactive"} >{item}</li>
                            )
                        }
                        
                    })
                    }
                </ul>
            </div>
        )
    }
}



export default Lyrics
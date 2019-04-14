import React from "react";
import "./Billboard.css"

function SongItem(props) {
    const {songs,count} = props

   console.log(songs)
    return (
        <div className={count % 2 == 1 ? 'songsactive' : 'songsitem'}>
        <div className="songsleft">
            <div>{count}</div>
            <div className="songstatus">
                {songs.rank_change > 0 ? <div className="up">↑</div> : <div className="down">↓</div>}
            </div>
            <div>{songs.title}</div>
        </div>
        <div className="songsauthor">
            {songs.author}
        </div>

    </div>

    )
}

export default SongItem
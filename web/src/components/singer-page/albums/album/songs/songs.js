import React from 'react';
import Song from './song';

const Songs = (props) => {

    const { songs, sortBy, sortType } = props;

    let sortedSongs = !sortBy ? songs : songs.sort((song1, song2) => {
        if(sortType === "DESC") return song1[sortBy] > song2[sortBy] ? -1 : 1;
        return song1[sortBy] < song2[sortBy] ? -1 : 1;
    })
    
    const songElements = sortedSongs.map((song) => <Song key={song.singer_id + "-" + song.album_id + "-" + song.id} { ...song } />)
    
    return ( 
        <div>
            { songElements }
        </div>
     );
}
 
export default Songs;
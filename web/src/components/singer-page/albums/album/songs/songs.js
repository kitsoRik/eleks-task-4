import React from 'react';
import Song from './song/song';

const Songs = (props) => {

    const { songs } = props;
    
    const songElements = songs.map((song) => <Song key={song.singer_id + "-" + song.album_id + "-" + song.id} { ...song } />)
    
    return ( 
        <div>
            { songElements }
        </div>
     );
}
 
export default Songs;
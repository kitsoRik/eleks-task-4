import React from 'react';
import Song from './song/song';

const Songs = (props) => {

    const { songs } = props;
    console.log(songs);

    const songElements = songs.map((song) => <Song { ...song } />)
    return ( 
        <div>
            { songElements }
        </div>
     );
}
 
export default Songs;
import React from 'react';

const Song = (props) => {

    const { id, name, description, duration } = props;

    return (
        <div className="album-song">
            <span className="album-song-field album-song-name">
                {name}
            </span>
            <span className="album-song-field album-song-description">
                {description}
            </span>
            <span className="album-song-field album-song-duration">
                {_parseDuration(duration)}
            </span>
        </div>
    );
}

const _parseDuration = (duration) => {
    let hour = parseInt(duration / 3600);
    duration %= 3600;
    let min = parseInt(duration / 60);
    duration %= 60;
    let sec = duration;

    if(hour === 0) return `${_firstZero(min)}:${_firstZero(sec)}`;

    return `${_firstZero(hour)}:${_firstZero(min)}:${_firstZero(sec)}`;
}

const _firstZero = (n) => {
    if(n < 10) return `0${n}`;
    return n; 
}

export default Song;
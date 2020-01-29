import React, { useState } from 'react'

import ApiHelper from "../../../../services/apiHelper"

import './album.scss'
import SongsHeaders from './songs-headers';
import Songs from './songs/songs';

function Album(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [sortBy, setSortBy] = useState("name");
    const [sortType, setSortType] = useState("DESC");

    const { album } = props;
    const { id, singer_id, name, songs } = album;

    const onDropdownClick = () => setIsOpen(!isOpen);
    
    const albumSongsClasses = "album-songs " + (isOpen ? "album-songs-open" : "");

    return ( 
        <div className="album-container" onClick={onDropdownClick}>
                <div className="album-row-data">
                    <div className="album-icon">
                        <img src={`${ApiHelper.host}/photo/albums/${id}_${singer_id}.jpg`} />
                    </div>
                    <span className="album-name">
                        {name}
                    </span>
                    <div className="album-dropdown">
                        &nbsp;
                    </div>
                </div> 
                <div className={albumSongsClasses}>
                    <SongsHeaders 
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        sortType={sortType}
                        setSortType={setSortType}/>
                    <Songs 
                        songs={songs}
                        sortBy={sortBy}
                        sortType={sortType}/>
                </div>
            </div>
     );
}

export default Album;

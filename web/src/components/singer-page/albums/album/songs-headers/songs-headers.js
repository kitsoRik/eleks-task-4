import React from 'react';

function SongsHeaders(props) {

    const { sortBy, setSortBy, sortType, setSortType } = props;

    

    const onClickSort = (e, sortby) => {
        e.stopPropagation();

        if(sortBy === sortby)
            return setSortType(sortType === "ASC" ? "DESC" : "ASC");

        setSortBy(sortby);
        setSortType("ASC");
    }


    const sortArrow = <div className="album-song-header-sort-arrow">^</div>;
    const sortArrowDown = <div style={{transform: "rotateX(180deg)"}} className="album-song-header-sort-arrow">^</div>;

    return ( 
        <div className="album-songs-headers">
                        <div 
                            className="album-songs-header" 
                            onClick={(e) => onClickSort(e, "name")}>
                            Name 
                            
                            { sortBy === "name" ? 
                                (sortType === "ASC" ? sortArrow : sortArrowDown)
                             : null }
                        </div>
                        <div 
                            className="album-songs-header album-songs-header-description"
                            onClick={(e) => onClickSort(e, "description")}>
                            Description 
                            
                            { sortBy === "description" ? 
                                (sortType === "ASC" ? sortArrow : sortArrowDown)
                             : null }
                        </div>
                        <div 
                            className="album-songs-header"
                            onClick={(e) => onClickSort(e, "duration")}>
                            Duration 
                            
                            { sortBy === "duration" ? 
                                (sortType === "ASC" ? sortArrow : sortArrowDown)
                             : null }
                        </div>
                    </div>
     );
}
 
export default SongsHeaders;
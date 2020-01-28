import React from 'react';
import Album from './album';

const Albums = (props) => {

    const { albums } = props;

    const albumsElements = albums.map((album) => 
                    <Album 
                        key={album.id}
                        album={ album }/>);

    return ( 
        <div className="singer-albums">
            {albumsElements}
        </div>
     );
}
 
export default Albums;
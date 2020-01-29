import React, { useEffect, useState } from 'react';

import "./singer-page.scss";

import ApiHelper from '../../services/apiHelper'
import SavedSingers from '../../services/savedSingers'
import Albums from './albums';

const SingerPage = (props) => {
     console.log(props);
     const [singer, setSinger] = useState(null);

     useEffect(() => {
          const { id } = props.match.params;

          if (SavedSingers.hasSinger(id)) {
               setSinger(SavedSingers.getSinger(id));
               return;
          }

          ApiHelper.getSingerById(id)
               .then((singer) => {
                    setSinger(singer);
                    SavedSingers.addSinger(singer);
               });
     }, []);

     if(!singer) return <span>Loading...</span>

     const { id, name, type, albums } = singer;

     return (
          <div className="singer-page">
               <div className="singer-container">
                    <div className="singer-title">{name}</div>
                    <div className="singer-photo">
                         <img src={`${ApiHelper.host}/photo/singers/${id}.jpg`} />
                    </div>
                    <Albums albums={albums} />
               </div>
          </div>
     );
}

export default SingerPage;
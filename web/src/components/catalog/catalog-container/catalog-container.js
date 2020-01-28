import React from 'react';
import CatalogItem from '../catalog-item';

const CatalogContainer = (props) => {

    const { singers,
            pageNumber, 
            pageLimit,
            searchText } = props;

    let startIndex = (pageNumber - 1) * pageLimit;
    const elements = singers.map((singer, index) => {
         return (
              <CatalogItem 
               key={singer.id}
               index={startIndex + index + 1} 
               search={searchText} {...singer} />
         )
    });

    return ( 
        <div className="catalog-container">
            {elements}
        </div>
     );
}
 
export default CatalogContainer;
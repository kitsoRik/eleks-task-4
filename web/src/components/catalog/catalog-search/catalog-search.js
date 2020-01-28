import React from 'react';

const CatalogSearch = (props) => {
    
    const { onStartFind } = props;

    return (
        <input
        className="catalog-search"
        placeholder="Search..."
        onChange={(e) => onStartFind(e.target.value)} />
   );
}

export default CatalogSearch;
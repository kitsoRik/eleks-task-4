import React from 'react';

const CatalogSearch = (props) => {
    
    const { searchText, onStartFind } = props;
    console.log(searchText);
    return (
        <input
        className="catalog-search"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => onStartFind(e.target.value)} />
   );
}

export default CatalogSearch;
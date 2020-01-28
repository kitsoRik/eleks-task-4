import React from 'react'

const CatalogContainerHeaders = (props) => {

    const { sortField, sortType } = props;
    const { onSort } = props;
    
    let sortArrow = sortType === "ASC" ?
                    <div className="catalog-container-header-sort-arrow">^</div> 
                    : <div 
                        style={{ transform: "rotateX(180deg)" }} 
                            className="catalog-container-header-sort-arrow"
                        >^</div>;

    return (
        <div className="catalog-container-headers">
            <div
                className="catalog-container-header catalog-container-header-index"
            >
                Index
            </div>
            <div className="catalog-container-header-splitter">&nbsp;</div>
            <div
                className="catalog-container-header catalog-container-header-name"
                onClick={() => onSort("name")}>
                Name
                {sortField === "name" ? sortArrow : null}
            </div>
            <div className="catalog-container-header-splitter">&nbsp;</div>
            <div
                className="catalog-container-header"
                onClick={() => onSort("year")}>
                Year
                {sortField === "year" ? sortArrow : null}
            </div>
            <div className="catalog-container-header-splitter">&nbsp;</div>
            <div
                className="catalog-container-header"
                onClick={() => onSort("albumsCount")}>
                Albums
                {sortField === "albumsCount" ? sortArrow : null}
            </div>
        </div>
    )
}

export default CatalogContainerHeaders;
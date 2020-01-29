import React from 'react';


const CatalogContainerPageControler = (props) => {

    const { pageNumber, pagesCount } = props;
    const { onPageChanged } = props;

    return (
        <div>
            <button
                onClick={() => onPageChanged("prev")}
                style={{ display: pageNumber === 1 ? "none" : "inline" }}
            >{"<"}</button>
            <span>{pageNumber}</span>
            <button
                onClick={() => onPageChanged("next")}
                style={{ display: pageNumber === pagesCount || pagesCount === 0 ? "none" : "inline" }}
            >{">"}</button>
        </div>
    )
};

export default CatalogContainerPageControler;
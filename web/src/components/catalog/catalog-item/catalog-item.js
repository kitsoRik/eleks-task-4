import React from 'react';
import { withRouter } from 'react-router-dom';

import "./catalog-item.scss";

const CatalogItem = (props) => {

     const { id, name, year, albumsCount, index, search } = props;

     let finalName = _fillSearchPos(name, search)

     return (
          <div className="catalog-item" onClick={() => props.history.push(`${id}`)}>
               <div className="catalog-item-index">{index}</div>
               <div className="catalog-item-info-splitter">&nbsp;</div>
               <div className="catalog-item-info catalog-item-name">{finalName}</div>
               <div className="catalog-item-info-splitter">&nbsp;</div>
               <div className="catalog-item-info">{year}</div>
               <div className="catalog-item-info-splitter">&nbsp;</div>
               <div className="catalog-item-info">{albumsCount}</div>

          </div>
     );
}

const _fillSearchPos = (name, search) => {

     if (!search) return name;

     let startIndex = name.toLowerCase().indexOf(search.toLowerCase());
     let left = name.substr(0, startIndex);
     let middle = name.substr(startIndex, search.length);
     let right = name.substr(left.length + middle.length, name.length);

     return <span>{left}<b style={{ textDecoration: "underline" }}>{middle}</b>{right}</span>
}

export default withRouter(CatalogItem);
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

import CatalogContainerHeaders from "./catalog-container-headers";
import CatalogContainerPageControler from './catalog-container-page-controler';


import "./catalog.scss"

import ApiHelper from '../../services/apiHelper';
import CatalogSearch from './catalog-search';
import CatalogContainer from './catalog-container';

function Catalog(props) {
     const { singers, setSingers, 
          loaded, setLoaded, 
          pagesCount, setPagesCount, 
          query, setQuery } = props;

     const { updateQuery } = props;
     
     const onStartFind = text => setQuery({ ...query, search: text });

     const onStartSort = (field) => {
          let q = { ...query };
          if (q.sort === field) {
               q.sortType = q.sortType === "ASC" ? "DESC" : "ASC";
          } else {
               q.sort = field;
               q.sortType = "ASC";
          }
          setQuery(q);
     }

     const onPageChanged = (direction) => {
          let q = { ...query };
                    
          if (direction === "next") q.page++;
          else q.page--;
          
          if (q.page < 0) q.page = 0;

          setQuery(q);
     }

     return (
          <div className="catalog">
               <CatalogSearch 
                    onStartFind={onStartFind}
               />
               <div className="catalog-table">
                    <CatalogContainerHeaders 
                         onSort={onStartSort}
                         sortField={query.sort}
                         sortType={query.sortType}
                    />
                    <CatalogContainer 
                         singers={singers}
                         pageNumber={query.page}
                         pageLimit={query.limit}
                         searchText={query.search}
                    />
               </div>
               <CatalogContainerPageControler 
                    pageNumber={ query.page }
                    pagesCount={ pagesCount }
                    onPageChanged={ onPageChanged }
               />
          </div>
     )
}
export default withRouter(Catalog);
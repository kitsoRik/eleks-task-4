import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Catalog from '../catalog'
import SingerPage from '../singer-page'
import ApiHelper from '../../services/apiHelper';

const App = (props) => {

     const [singers, setSingers] = useState([]);
     const [loaded, setLoaded] = useState(false);
     const [pagesCount, setPagesCount] = useState(-1);
     const [query, setQuery] = useState({
          search: null,
          sort: "name",
          sortType: "ASC",
          limit: 5,
          page: 1
     });

     const updateQuery = () => {
          setLoaded(false);
          ApiHelper.getAllSingers(query)
                    .then((body) => {
                         setSingers(body);
                         setLoaded(true);
                    });
     }

     useEffect(() => {
          ApiHelper.getPagesCount(query.limit)
               .then(({ pages }) => {
                    setPagesCount(pages)
                    updateQuery();
               });
     }, [pagesCount]);

     useEffect(() => updateQuery(), [query]);
     
     const catalog = () => 
          <Catalog
               singers={singers}
               setSingers={setSingers}
               loaded={loaded}
               setLoaded={setLoaded}
               pagesCount={pagesCount}
               setPagesCount={setPagesCount}
               query={query}
               setQuery={setQuery}

               updateQuery={updateQuery}
               />;
     const element = (props) =>
          <SingerPage
               {...props} />;

     return (
          <div>
               <Router>
                    <Switch>
                         <Route path="/" render={() => <Link to="/catalog/">Catalog</Link>} exact />
                         <Route path="/catalog/" component={catalog} exact />
                         <Route path="/catalog/:id" component={element} exact />

                         <Redirect to="/" />
                    </Switch>
               </Router>
          </div>
     );
}

export default App;
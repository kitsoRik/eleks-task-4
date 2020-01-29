import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Catalog from '../catalog'
import SingerPage from '../singer-page'
import ApiHelper from '../../services/apiHelper';

const App = (props) => {

     const [searchText, setSearchText] = useState(""); 
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
                         setSingers(body.singers);
                         setLoaded(true);
                         setPagesCount(Math.ceil(body.singersCount / query.limit))
                    });
     }

     useEffect(() => updateQuery(), [query]);

     return (
          <div>
               <Router>
                    <Switch>
                         <Route path="/" render={() => <Link to="/catalog/">Catalog</Link>} exact />
                         <Route path="/catalog/" render={() => 
                              <Catalog
                                   searchText={searchText}
                                   setSearchText={setSearchText}
                                   singers={singers}
                                   setSingers={setSingers}
                                   loaded={loaded}
                                   setLoaded={setLoaded}
                                   pagesCount={pagesCount}
                                   setPagesCount={setPagesCount}
                                   query={query}
                                   setQuery={setQuery}

                                   updateQuery={updateQuery}
                              />} exact />
                         <Route path="/catalog/:id" render={(props) => <SingerPage { ...props }/>} exact />

                         <Redirect to="/" />
                    </Switch>
               </Router>
          </div>
     );
}

export default App;
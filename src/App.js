// router dependency
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

//Components
const Visitors = lazy(() => import('./Visitors/Visitors')),
  Entrepreneur = lazy(() => import('./Entrepreneur/Entrepreneur'))

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" component={Visitors} />

            <Route path="/Enprepreneour" component={Entrepreneur} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;

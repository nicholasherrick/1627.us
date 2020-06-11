import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './utils/history';
import Main from './views/main';
import Contact from './views/contact';
import Stockists from './views/stockists';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/contact' component={Contact} />
          <Route path='/stockists' component={Stockists} />
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

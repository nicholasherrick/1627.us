import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './utils/history';
import Main from './views/main';
import Terms from './views/terms';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/terms' component={Terms} />
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

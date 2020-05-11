import React, { Fragment } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Quiz from './components/quiz_view/Quiz';
import Question from './components/question/Question';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/quiz' component={Quiz} />
          <Route exact path='/:id' component={Question} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;

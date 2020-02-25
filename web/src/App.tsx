import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store from './store';
import SignUp from './screens/SignUp';
import Home from './screens/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div>
            <div>Demo router implementation</div>
            <div>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

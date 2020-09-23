import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AuthPage from './Pages/AuthPage';

// You may include '/:check' instead of path='/:?auth_code' to see in console 
// that my AuthPage get authCode via props.match.url

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route  path='/:?auth_code' component={AuthPage} />
    </Switch>
    </div>
  );
}

export default App;

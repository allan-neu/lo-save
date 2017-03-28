import React from 'react';
// import { Router, Route, IndexRoute, browserHistory, BrowserRouter } from 'react-router'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Components/Home';
import CityListing from './Components/CityListing';
import Article from './Components/Article';
import './index.css';



ReactDOM.render(
  <Router>
  		<App>
  			<Route path='/' exact={true} component={Home}></Route>
  			<Route path='/:city' exact={true} component={CityListing}></Route>
  			<Route path='/:city/:articleId' exact={true} component={Article}></Route>
  		</App>
  </Router>,
  document.getElementById('root')
);
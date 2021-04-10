import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Shop from './Shop';
import JobListing from './JobListing/JobListing'


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/Job">Job Listing</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Shop">
            <Shop />
          </Route>
          <Route path="/Job">
            <JobListing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

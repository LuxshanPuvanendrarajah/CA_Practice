import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import FilterableCoursesTable from './Components/FilterableCoursesTable5';
import AddCourseForm from './Components/AddCourseForm';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Search</NavLink>
            </li>
            <li>
              <NavLink to="/add">Add</NavLink>
            </li>
            <li>
              <NavLink to="/someunmatchableroute">
                Unmatchable Route
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact>
          <FilterableCoursesTable />
        </Route>
        <Route path="/courses">
          <FilterableCoursesTable />
        </Route>
        <Route path="/add">
          <AddCourseForm />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

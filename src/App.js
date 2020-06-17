import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter, Redirect } from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <header>
            <h3>Navlinks</h3>
            <nav>
              <ul>
                <li>
                  <NavLink to='/users'>Users</NavLink>
                </li>
                <li>
                  <NavLink to='/courses'>Courses</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <div>
            <h3>simple links</h3>
            <a href='/Users' title='Users'>
              Users
            </a>
            --
            <a href='/Courses' title='Courses'>
              Courses
            </a>
          </div>
          <Route path='/users' exact component={Users} />
          <Route path='/courses' component={Courses} />
          {/* <Route path='/' exact render={() => <h1>Home</h1>} /> */}
          {/* <Route render={() => <h1>Not found</h1>} /> */}
          <Redirect from='/all-courses' to='/courses' />
          <Redirect from='/' to='/courses' />

          <ol style={{ textAlign: 'left' }}>
            <li>
              <del>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</del>
            </li>
            <li>
              <del>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</del>
            </li>
            <li>
              <del>
                Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing
                any data for now)
              </del>
            </li>
            <li>
              <del>Pass the course ID to the "Course" page and output it there</del>
            </li>
            <li>
              <del>
                Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to
                manually parse them though!)
              </del>
            </li>
            <li>
              <del>Load the "Course" component as a nested component of "Courses"</del>
            </li>
            <li>
              <del>Add a 404 error page and render it for any unknown routes</del>
            </li>
            <li>
              <del>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</del>
            </li>
          </ol>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

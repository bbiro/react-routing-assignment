import React, { Component } from 'react';
import Course from '../Course/Course';
import './Courses.css';
import { Route, NavLink } from 'react-router-dom';

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: 'Angular - The Complete Guide' },
      { id: 2, title: 'Vue - The Complete Guide' },
      { id: 3, title: 'PWA - The Complete Guide' },
    ],
    loadedCourse: null,
  };

  loadedCourseHandler = (id, title) => {
    console.log(this.props);
    this.props.history.push('/courses/' + id + '?title=' + encodeURI(title));
  };

  render() {
    const courses = this.state.courses.map((course) => {
      return (
        // <article className='Course' key={course.id} onClick={this.loadedCourseHandler.bind(this, course.id, course.title)}>
        //   {course.title}
        // </article>
        <Course title={course.title} id={course.id} key={course.id} click={this.loadedCourseHandler.bind(this, course.id, course.title)} />
      );
    });

    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className='Courses'>{courses}</section>
        <Route path='/courses/:id' component={Course} />
      </div>
    );
  }
}

export default Courses;

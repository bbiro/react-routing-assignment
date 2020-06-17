import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseData: null,
    };
  }

  render() {
    const query = new URLSearchParams(this.props.location.search);
    const courseData = {
      title: this.props.title,
      id: this.props.id,
    };
    console.log(courseData);
    if (courseData.title === undefined) {
      for (let param of query.entries()) {
        courseData[param[0]] = param[1];
        courseData['id'] = this.props.match.params.id;
      }
    }

    return (
      <div>
        <h1 onClick={this.props.click}>{courseData.title}</h1>
        <p>You selected the Course with ID: {courseData.id}</p>
      </div>
    );
  }
}

export default withRouter(Course);

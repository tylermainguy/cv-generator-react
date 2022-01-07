import React, { Component } from "react";

class EducationListing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const {
      uniqueId,
      location,
      degree,
      fieldOfStudy,
      yearStarted,
      yearFinished,
      educationDescription,
      deleteEducationEntry,
    } = this.props;
    return (
      <div id={uniqueId} className="edit-entry">
        <div>
          <span className="education-entry-listing">Location: </span>
          {location}
        </div>
        <div>
          <span className="education-entry-listing">Degree: </span>
          {degree}
        </div>
        <div>
          <span className="education-entry-listing">Field of Study: </span>
          {fieldOfStudy}
        </div>
        <div>
          <span className="education-entry-listing">Year Started: </span>
          {yearStarted}
        </div>
        <div>
          <span className="education-entry-listing">Year Finished: </span>
          {yearFinished}
        </div>
        <div>
          <span className="education-entry-listing">Description: </span>
          {educationDescription}
        </div>
        <button className="delete-button" onClick={deleteEducationEntry}>
          Delete
        </button>
      </div>
    );
  }
}

export default EducationListing;

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
      editExistingEducation,
      toggleEdit,
      isEdit,
    } = this.props;

    if (isEdit) {
      return (
        <div id={uniqueId} className="edit-entry">
          <input
            id="location"
            refid={uniqueId}
            value={location}
            onChange={editExistingEducation}
            placeholder="Location"
            type="text"
          ></input>
          <input
            id="degree"
            refid={uniqueId}
            value={degree}
            onChange={editExistingEducation}
            placeholder="Degree (e.g. BA, MSc, PhD)"
            type="text"
          ></input>
          <input
            id="fieldOfStudy"
            refid={uniqueId}
            value={fieldOfStudy}
            onChange={editExistingEducation}
            placeholder="Field of Study (e.g. Computer Science)"
            type="text"
          ></input>
          <input
            id="yearStarted"
            refid={uniqueId}
            value={yearStarted}
            onChange={editExistingEducation}
            placeholder="Year Started"
            type="text"
          ></input>
          <input
            id="yearFinished"
            refid={uniqueId}
            value={yearFinished}
            onChange={editExistingEducation}
            placeholder="Year Finished"
            type="text"
          ></input>
          <textarea
            id="educationDescription"
            refid={uniqueId}
            onChange={editExistingEducation}
            value={educationDescription}
            placeholder="Description"
            type="text"
          ></textarea>
          <button refid={uniqueId} className="add-button" onClick={toggleEdit}>
            Resubmit
          </button>
        </div>
      );
    } else {
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
          <div className="education-listing-buttons">
            <button
              refid={uniqueId}
              className="edit-button"
              onClick={toggleEdit}
            >
              Edit
            </button>
            <button
              refid={uniqueId}
              className="delete-button"
              onClick={deleteEducationEntry}
            >
              Delete
            </button>
          </div>
        </div>
      );
    }
  }
}

export default EducationListing;

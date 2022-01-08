import React, { Component } from "react";

import EducationListing from "./EducationListing";
import WorkListing from "./WorkListing";
class EditWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      general,
      education,
      editGeneral,
      editEducation,
      editWork,
      editWorkYear,
      educationList,
      editPhoneNumber,
      editYear,
      submitEducationForm,
      submitWorkForm,
      deleteEducationEntry,
      work,
      workList,
      deleteWorkEntry,
      toggleEducationEdit,
      toggleWorkEdit,
      editExistingEducation,
      editExistingWork,
    } = this.props;
    const {
      firstName,
      lastName,
      phone,
      address,
      occupation,
      email,
      description,
    } = general;
    const {
      location,
      degree,
      fieldOfStudy,
      yearStarted,
      yearFinished,
      educationDescription,
    } = education;
    const { company, position, workStarted, workFinished, workDescription } =
      work;

    return (
      <div className="edit-window">
        <div className="edit-section">
          <div className="edit-title">General</div>
          <div className="edit-general-container">
            <input
              value={firstName}
              onChange={editGeneral}
              placeholder="First Name"
              id="firstName"
            />
            <input
              value={lastName}
              onChange={editGeneral}
              placeholder="Last Name"
              id="lastName"
            />
            <input
              value={occupation}
              onChange={editGeneral}
              placeholder="Occupation"
              id="occupation"
            ></input>
            <input
              value={phone}
              type="phone"
              onChange={editPhoneNumber}
              placeholder="Phone number (xxx-xxx-xxxx)"
              id="phone"
            ></input>
            <input
              value={address}
              onChange={editGeneral}
              placeholder="Address"
              id="address"
            ></input>
            <input
              value={email}
              onChange={editGeneral}
              placeholder="Email"
              id="email"
            ></input>
            <textarea
              value={description}
              onChange={editGeneral}
              placeholder="Description"
              id="description"
            ></textarea>
          </div>
        </div>
        <div className="edit-section">
          <div className="edit-title">Education</div>
          {educationList.map((edu) => {
            return (
              <EducationListing
                location={edu.location}
                degree={edu.degree}
                fieldOfStudy={edu.fieldOfStudy}
                yearStarted={edu.yearStarted}
                yearFinished={edu.yearFinished}
                educationDescription={edu.educationDescription}
                deleteEducationEntry={deleteEducationEntry}
                uniqueId={edu.uniqueId}
                toggleEdit={toggleEducationEdit}
                isEdit={edu.isEdit}
                key={edu.uniqueId}
                editExistingEducation={editExistingEducation}
              />
            );
          })}
          <form onSubmit={submitEducationForm}>
            <input
              id="location"
              value={location}
              onChange={editEducation}
              placeholder="Location"
              type="text"
            ></input>
            <input
              id="degree"
              value={degree}
              onChange={editEducation}
              placeholder="Degree (e.g. BA, MSc, PhD)"
              type="text"
            ></input>
            <input
              id="fieldOfStudy"
              value={fieldOfStudy}
              onChange={editEducation}
              placeholder="Field of Study (e.g. Computer Science)"
              type="text"
            ></input>
            <input
              id="yearStarted"
              value={yearStarted}
              onChange={editYear}
              placeholder="Year Started"
              type="text"
            ></input>
            <input
              id="yearFinished"
              value={yearFinished}
              onChange={editYear}
              placeholder="Year Finished"
              type="text"
            ></input>
            <textarea
              id="educationDescription"
              onChange={editEducation}
              value={educationDescription}
              placeholder="Description"
              type="text"
            ></textarea>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="edit-section">
          <div className="edit-title">Work</div>
          {workList.map((work) => {
            return (
              <WorkListing
                key={work.uniqueId}
                company={work.company}
                position={work.position}
                workStarted={work.workStarted}
                workFinished={work.workFinished}
                workDescription={work.workDescription}
                deleteEntry={deleteWorkEntry}
                toggleEdit={toggleWorkEdit}
                isEdit={work.isEdit}
                uniqueId={work.uniqueId}
                editExistingWork={editExistingWork}
              />
            );
          })}
          <form onSubmit={submitWorkForm}>
            <input
              id="company"
              placeholder="Company Name"
              value={company}
              onChange={editWork}
              type="text"
            ></input>
            <input
              id="position"
              placeholder="Position"
              onChange={editWork}
              value={position}
              type="text"
            ></input>
            <input
              id="workStarted"
              placeholder="Year Started"
              value={workStarted}
              onChange={editWorkYear}
              type="text"
            ></input>
            <input
              id="workFinished"
              placeholder="Year Finished"
              value={workFinished}
              onChange={editWorkYear}
              type="text"
            ></input>
            <textarea
              id="workDescription"
              placeholder="Description"
              onChange={editWork}
              value={workDescription}
              type="text"
            ></textarea>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditWindow;

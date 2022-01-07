import React, { Component } from "react";

class DisplayWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { general, educationList, workList } = this.props;
    const {
      firstName,
      lastName,
      phone,
      address,
      occupation,
      email,
      description,
    } = general;

    return (
      <div className="display-window">
        <div className="general-display">
          <div className="wrap-display name-display">
            {firstName || lastName ? `${firstName} ${lastName}` : "Your Name"}
          </div>
          <div className="wrap-display occupation-display">
            {occupation ? occupation : "Your Occupation"}
          </div>
          <div className="wrap-display phone-display">
            {phone ? `Phone: ${phone}` : "Phone: xxx-xxx-xxxx"}
          </div>
          <div className="wrap-display address-display">
            {address ? `Address: ${address}` : "Address: 123 Fake St."}
          </div>
          <div className="wrap-display email-display">
            {email ? `Email: ${email}` : "Email: my@email.com"}
          </div>
          <div className="wrap-display description-display">
            {description ? description : "Enter a description about yourself."}
          </div>
        </div>
        <div className="separate-sections"></div>
        <div className="education-display">
          <div className="education-title">Education</div>
          <div className="education-list">
            {educationList.length === 0 && (
              <div className="listing">
                <div className="wrap-display listing-title">
                  Some University, BA Computer Science
                </div>
                <div className="wrap-display listing-years">2016-2020</div>
                <div className="wrap-display listing-description">
                  Graduated from some university, with a degree in computer
                  science.
                </div>
              </div>
            )}
            {educationList
              .sort((a, b) => (a.yearStarted < b.yearStarted ? 1 : -1))
              .map((education) => {
                return (
                  <div key={education.uniqueId} className="listing">
                    <div className="wrap-display listing-title">
                      {education.location}, {education.degree}{" "}
                      {education.fieldOfStudy}
                    </div>
                    <div className="wrap-display listing-years">
                      {education.yearStarted} - {education.yearFinished}
                    </div>
                    <div className="wrap-display listing-description">
                      {education.educationDescription}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="separate-sections"></div>
        <div className="work-display">
          <div className="work-title">Work</div>
          <div className="work-list">
            {workList.length === 0 && (
              <div className="listing">
                <div className="wrap-display listing-title">
                  Software Engineer @ Some Company
                </div>
                <div className="wrap-display listing-years">2020-2021</div>
                <div className="wrap-display listing-description">
                  Worked on map features. Primary technologies used were React,
                  node.js, and graphql.
                </div>
              </div>
            )}
            {workList.length === 0 && (
              <div className="listing">
                <div className="wrap-display listing-title">
                  Software Engineer @ Some Other Company
                </div>
                <div className="wrap-display listing-years">2020-2021</div>
                <div className="wrap-display listing-description">
                  Worked on some other things at this company. Primary
                  techonolgies used were React, node.js, and graphql.
                </div>
              </div>
            )}
            {workList
              // want newer work experience to show up first
              .sort((a, b) => (a.workStarted < b.workStarted ? 1 : -1))
              .map((work) => {
                return (
                  <div key={work.uniqueId} className="listing">
                    <div className="wrap-display listing-title">
                      {work.position} @ {work.company}
                    </div>
                    <div className="wrap-display listing-years">
                      {work.workStarted} - {work.workFinished}
                    </div>
                    <div className="wrap-display listing-description">
                      {work.workDescription}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayWindow;

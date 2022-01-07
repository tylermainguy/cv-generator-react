import React, { Component } from "react";

class WorkListing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      uniqueId,
      company,
      position,
      workStarted,
      workFinished,
      workDescription,
      deleteWorkEntry,
    } = this.props;

    return (
      <div id={uniqueId} className="edit-entry">
        <div>
          <span className="work-entry-listing">Company: </span>
          {company}
        </div>
        <div>
          <span className="work-entry-listing">Position: </span>
          {position}
        </div>
        <div>
          <span className="work-entry-listing">Year Started: </span>
          {workStarted}
        </div>
        <div>
          <span className="work-entry-listing">Year Finished: </span>
          {workFinished}
        </div>
        <div>
          <span className="work-entry-listing">Description: </span>
          {workDescription}
        </div>
        <button onClick={deleteWorkEntry}>Delete</button>
      </div>
    );
  }
}

export default WorkListing;

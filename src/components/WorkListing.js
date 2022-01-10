import React from "react";

const WorkListing = (props) => {
  const { work, deleteEntry, toggleEdit, editExistingWork } = props;
  const {
    uniqueId,
    company,
    position,
    workStarted,
    workFinished,
    workDescription,
    isEdit,
  } = work;

  if (isEdit) {
    return (
      <div id={uniqueId} className="edit-entry">
        <input
          id="company"
          placeholder="Company Name"
          value={company}
          onChange={editExistingWork}
          refid={uniqueId}
          type="text"
        ></input>
        <input
          id="position"
          placeholder="Position"
          onChange={editExistingWork}
          refid={uniqueId}
          value={position}
          type="text"
        ></input>
        <input
          id="workStarted"
          placeholder="Year Started"
          value={workStarted}
          refid={uniqueId}
          onChange={editExistingWork}
          type="text"
        ></input>
        <input
          id="workFinished"
          placeholder="Year Finished"
          refid={uniqueId}
          value={workFinished}
          onChange={editExistingWork}
          type="text"
        ></input>
        <textarea
          id="workDescription"
          placeholder="Description"
          refid={uniqueId}
          onChange={editExistingWork}
          value={workDescription}
          type="text"
        ></textarea>
        <button refid={uniqueId} className="add-button" onClick={toggleEdit}>
          Resubmit
        </button>
      </div>
    );
  }

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
      <div className="listing-buttons">
        <button refid={uniqueId} className="edit-button" onClick={toggleEdit}>
          Edit
        </button>
        <button
          refid={uniqueId}
          className="delete-button"
          onClick={deleteEntry}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default WorkListing;

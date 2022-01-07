import React, { Component } from 'react';
import uniqid from "uniqid";

import EditWindow from './EditWindow';
import DisplayWindow from './DisplayWindow';

class CVContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: {
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        occupation: '',
        email: '',
        description: ''
      },
      educationList: [],
      education: {
        uniqueId: `education${uniqid()}`,
        location: '',
        degree: '',
        fieldOfStudy: '',
        yearStarted: '',
        yearFinished: '',
        educationDescription: '',
      },
      workList: [],
      work: {
        uniqueId: `work${uniqid()}`,
        company: '',
        position: '',
        workStarted: '',
        workFinished: '',
        workDescription: '',
      }
    };
  }

  editGeneralField = (e) => {
    this.setState(prevState => ({
      ...prevState,
      general: {
        ...prevState.general,
        [e.target.id]: e.target.value,
      }
    }));
  }

  editEducationField = (e) => {
    this.setState(prevState => ({
      ...prevState,
      education: {
        ...prevState.education,
        [e.target.id]: e.target.value,
      }
    }));
  }

  editWorkField = (e) => {
    this.setState(prevState => ({
      ...prevState,
      work: {
        ...prevState.work,
        [e.target.id]: e.target.value,
      }
    }));
  }

  normalizeYearInput = (val, prevVal) => {
    if (!val) return '';

    const trimmed = val.replace(/[^\d]/g, "");

    if (trimmed.length === prevVal.length || trimmed.length > 4) {
      return prevVal;
    }
    return trimmed;

  }

  editYear = (e) => {
    this.setState(prevState => ({
      ...prevState,
      education: {
        ...prevState.education,
        [e.target.id]: this.normalizeYearInput(e.target.value, prevState.education[e.target.id])
      }
    }))
  }

  editWorkYear = (e) => {
    this.setState(prevState => ({
      ...prevState,
      work: {
        ...prevState.work,
        [e.target.id]: this.normalizeYearInput(e.target.value, prevState.work[e.target.id])
      }
    }))

  }

  normalizePhoneNumber = (val, prevVal) => {
    if (!val) return '';

    const trimmed = val.replace(/[^\d]/g, "");

    if (trimmed.length === prevVal.length || trimmed.length > 10) {
      return prevVal;
    }
    return trimmed;
  }

  editPhoneNumber = (e) => {
    this.setState(prevState => ({
      ...prevState,
      general: {
        ...prevState.general,
        phone: this.normalizePhoneNumber(e.target.value, prevState.general.phone) 
      }
    }));
  }

  submitEducationForm = (e) => {
    e.preventDefault();

    const { location, degree, fieldOfStudy, yearStarted, yearFinished, educationDescription } = this.state.education;
    
    if (!location || !degree || !fieldOfStudy || !yearStarted 
      ||!yearFinished || !educationDescription || yearStarted > yearFinished) return
        

    this.setState(prevState => ({
      ...prevState,
      educationList: [...this.state.educationList, this.state.education],
      education: {
        uniqueId: `education${uniqid()}`,
        location: '',
        degree: '',
        fieldOfStudy: '',
        yearStarted: '',
        yearFinished: '',
        educationDescription: '',
      }
    }))
  }

  submitWorkForm = (e) => {
    e.preventDefault();

    const { company, position, workStarted, workFinished, workDescription } = this.state.work;
    
    if (!company || !position || !workStarted || !workFinished
      || !workDescription || workStarted > workFinished) return; 
    
    this.setState((prevState) => ({
      ...prevState,
      workList: [...this.state.workList, this.state.work],
      work: {
        uniqueId: `work${uniqid()}`,
        company: '',
        position: '',
        workStarted: '',
        workFinished: '',
        workDescription: '',
      }
    }))
  }

  deleteEducationEntry = (e) => {
    const targetId = e.target.parentNode.id;

    this.setState(prevState => ({
      ...prevState,
      educationList: this.state.educationList.filter(education => {
        return (education.uniqueId !== targetId);
      })
    }))
  }

  deleteWorkEntry = (e) => {
    const targetId = e.target.parentNode.id;

    this.setState((prevState) => ({
      ...prevState,
      workList: this.state.workList.filter((work) => {
        return work.uniqueId !== targetId;
      })
    }));
  }

  render() {
    const { general, education, work, educationList, workList } = this.state;
    return (
      <div className="container">
        <EditWindow
          general={general}
          education={education}
          work={work}
          workList={workList}
          educationList={educationList}
          editGeneral={(e) => { this.editGeneralField(e); }}
          editEducation={(e) => { this.editEducationField(e)}}
          editWork={(e) => { this.editWorkField(e)}}
          editPhoneNumber={(e) => { this.editPhoneNumber(e)}}
          deleteEducationEntry={(e) => {this.deleteEducationEntry(e)}}
          deleteWorkEntry={(e) => {this.deleteWorkEntry(e)}}
          submitEducationForm={(e) => {this.submitEducationForm(e)}}
          submitWorkForm={(e) => { this.submitWorkForm(e)}}
          editYear={(e) => this.editYear(e)}
          editWorkYear={(e => {this.editWorkYear(e)})}
        />
        <DisplayWindow
          general={general}
          educationList={educationList}
          workList={workList}
        />
      </div>
    );
  }
}

export default CVContainer;

import React, { useState } from "react";
import uniqid from "uniqid";

import EditWindow from "./EditWindow";
import DisplayWindow from "./DisplayWindow";

const CVContainer = () => {
  const [general, setGeneral] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    occupation: "",
    email: "",
    description: "",
  });

  const [education, setEducation] = useState({
    uniqueId: `education${uniqid()}`,
    location: "",
    degree: "",
    fieldOfStudy: "",
    yearStarted: "",
    yearFinished: "",
    educationDescription: "",
    isEdit: false,
  });

  const [work, setWork] = useState({
    uniqueId: `work${uniqid()}`,
    company: "",
    position: "",
    workStarted: "",
    workFinished: "",
    workDescription: "",
    isEdit: false,
  });

  const [educationList, setEducationList] = useState([]);
  const [workList, setWorkList] = useState([]);

  const normalizeYearInput = (val, prevVal) => {
    if (!val) return "";

    const trimmed = val.replace(/[^\d]/g, "");

    if (trimmed.length === prevVal.length || trimmed.length > 4) {
      return prevVal;
    }
    return trimmed;
  };

  const normalizePhoneNumber = (val, prevVal) => {
    if (!val) return "";

    const trimmed = val.replace(/[^\d]/g, "");

    if (trimmed.length === prevVal.length || trimmed.length > 10) {
      return prevVal;
    }
    return trimmed;
  };

  const editGeneralField = (e) => {
    setGeneral((prevGeneral) => {
      return {
        ...prevGeneral,
        [e.target.id]: e.target.value,
      };
    });
  };

  const editEducationField = (e) => {
    setEducation((prevEducation) => {
      return {
        ...prevEducation,
        [e.target.id]: e.target.value,
      };
    });
  };

  const editWorkField = (e) => {
    setWork((prevWork) => {
      return {
        ...prevWork,
        [e.target.id]: e.target.value,
      };
    });
  };

  const editYear = (e) => {
    setEducation((prevEducation) => {
      return {
        ...prevEducation,
        [e.target.id]: normalizeYearInput(
          e.target.value,
          prevEducation[e.target.id]
        ),
      };
    });
  };

  const editWorkYear = (e) => {
    setWork((prevWork) => {
      return {
        ...prevWork,
        [e.target.id]: normalizeYearInput(
          e.target.value,
          prevWork[e.target.id]
        ),
      };
    });
  };

  const editPhoneNumber = (e) => {
    setGeneral((prevGeneral) => {
      return {
        ...prevGeneral,
        phone: normalizePhoneNumber(e.target.value, prevGeneral.phone),
      };
    });
  };

  const submitEducationForm = (e) => {
    e.preventDefault();

    const {
      location,
      degree,
      fieldOfStudy,
      yearStarted,
      yearFinished,
      educationDescription,
    } = education;

    if (
      !location ||
      !degree ||
      !fieldOfStudy ||
      !yearStarted ||
      !yearFinished ||
      !educationDescription ||
      yearStarted > yearFinished
    )
      return;

    setEducationList((prevEducationList) => {
      return [...prevEducationList, education];
    });

    setEducation({
      uniqueId: `education${uniqid()}`,
      location: "",
      degree: "",
      fieldOfStudy: "",
      yearStarted: "",
      yearFinished: "",
      educationDescription: "",
    });
  };

  const submitWorkForm = (e) => {
    e.preventDefault();

    const { company, position, workStarted, workFinished, workDescription } =
      work;

    if (
      !company ||
      !position ||
      !workStarted ||
      !workFinished ||
      !workDescription ||
      workStarted > workFinished
    )
      return;

    setWorkList((prevWorkList) => {
      return [...prevWorkList, work];
    });

    setWork({
      uniqueId: `work${uniqid()}`,
      company: "",
      position: "",
      workStarted: "",
      workFinished: "",
      workDescription: "",
    });
  };

  const deleteEducationEntry = (e) => {
    const targetId = e.target.getAttribute("refid");

    setEducationList((prevEducationList) => {
      return prevEducationList.filter((education) => {
        return education.uniqueId !== targetId;
      });
    });
  };

  const deleteWorkEntry = (e) => {
    const targetId = e.target.getAttribute("refid");

    setWorkList((prevWorkList) => {
      return prevWorkList.filter((work) => {
        return work.uniqueId !== targetId;
      });
    });
  };

  const toggleEducationEdit = (e) => {
    const targetId = e.target.getAttribute("refid");

    setEducationList((prevEducationList) => {
      return prevEducationList.map((education) => {
        if (education.uniqueId === targetId) {
          const itemCopy = { ...education };

          itemCopy.isEdit = !itemCopy.isEdit;
          return itemCopy;
        }
        return education;
      });
    });
  };

  const editExistingEducation = (e) => {
    const targetId = e.target.getAttribute("refid");

    setEducationList((prevEducationList) => {
      return prevEducationList.map((education) => {
        if (education.uniqueId === targetId) {
          const itemCopy = { ...education };
          itemCopy[e.target.id] = e.target.value;
          return itemCopy;
        }
        return education;
      });
    });
  };

  const editExistingWork = (e) => {
    const targetId = e.target.getAttribute("refid");
    console.log(e.target.value);

    setWorkList((prevWorkList) => {
      return prevWorkList.map((work) => {
        if (work.uniqueId === targetId) {
          const itemCopy = { ...work };
          itemCopy[e.target.id] = e.target.value;
          return itemCopy;
        }
        return work;
      });
    });
  };
  const toggleWorkEdit = (e) => {
    const targetId = e.target.getAttribute("refid");

    setWorkList((prevWorkList) => {
      return prevWorkList.map((work) => {
        if (work.uniqueId === targetId) {
          const itemCopy = { ...work };
          itemCopy.isEdit = !itemCopy.isEdit;
          return itemCopy;
        }
        return work;
      });
    });
  };

  return (
    <div className="container">
      <EditWindow
        general={general}
        education={education}
        work={work}
        workList={workList}
        educationList={educationList}
        editGeneral={(e) => {
          editGeneralField(e);
        }}
        editEducation={(e) => {
          editEducationField(e);
        }}
        editWork={(e) => {
          editWorkField(e);
        }}
        editPhoneNumber={(e) => {
          editPhoneNumber(e);
        }}
        deleteEducationEntry={(e) => {
          deleteEducationEntry(e);
        }}
        deleteWorkEntry={(e) => {
          deleteWorkEntry(e);
        }}
        submitEducationForm={(e) => {
          submitEducationForm(e);
        }}
        submitWorkForm={(e) => {
          submitWorkForm(e);
        }}
        editYear={(e) => editYear(e)}
        editWorkYear={(e) => {
          editWorkYear(e);
        }}
        toggleEducationEdit={(e) => {
          toggleEducationEdit(e);
        }}
        editExistingEducation={(e) => {
          editExistingEducation(e);
        }}
        editExistingWork={(e) => {
          editExistingWork(e);
        }}
        toggleWorkEdit={(e) => {
          toggleWorkEdit(e);
        }}
      />
      <DisplayWindow
        general={general}
        educationList={educationList}
        workList={workList}
      />
    </div>
  );
};
// class CVContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       general: {},
//       educationList: [],
//       education: {
//         uniqueId: `education${uniqid()}`,
//         location: "",
//         degree: "",
//         fieldOfStudy: "",
//         yearStarted: "",
//         yearFinished: "",
//         educationDescription: "",
//         isEdit: false,
//       },
//       workList: [],
//       work: {
//         uniqueId: `work${uniqid()}`,
//         company: "",
//         position: "",
//         workStarted: "",
//         workFinished: "",
//         workDescription: "",
//         isEdit: false,
//       },
//     };
//   }

//   editGeneralField = (e) => {
//     this.setState((prevState) => ({
//       ...prevState,
//       general: {
//         ...prevState.general,
//         [e.target.id]: e.target.value,
//       },
//     }));
//   };

//   editEducationField = (e) => {
//     this.setState((prevState) => ({
//       ...prevState,
//       education: {
//         ...prevState.education,
//         [e.target.id]: e.target.value,
//       },
//     }));
//   };

//   editWorkField = (e) => {
//     this.setState((prevState) => ({
//       ...prevState,
//       work: {
//         ...prevState.work,
//         [e.target.id]: e.target.value,
//       },
//     }));
//   };

//   normalizeYearInput = (val, prevVal) => {
//     if (!val) return "";

//     const trimmed = val.replace(/[^\d]/g, "");

//     if (trimmed.length === prevVal.length || trimmed.length > 4) {
//       return prevVal;
//     }
//     return trimmed;
//   };

//   editYear = (e) => {
//     this.setState((prevState) => ({
//       ...prevState,
//       education: {
//         ...prevState.education,
//         [e.target.id]: this.normalizeYearInput(
//           e.target.value,
//           prevState.education[e.target.id]
//         ),
//       },
//     }));
//   };

//   editWorkYear = (e) => {
//     this.setState((prevState) => ({
//       ...prevState,
//       work: {
//         ...prevState.work,
//         [e.target.id]: this.normalizeYearInput(
//           e.target.value,
//           prevState.work[e.target.id]
//         ),
//       },
//     }));
//   };

//   normalizePhoneNumber = (val, prevVal) => {
//     if (!val) return "";

//     const trimmed = val.replace(/[^\d]/g, "");

//     if (trimmed.length === prevVal.length || trimmed.length > 10) {
//       return prevVal;
//     }
//     return trimmed;
//   };

//   editPhoneNumber = (e) => {
//     this.setState((prevState) => ({
//       ...prevState,
//       general: {
//         ...prevState.general,
//         phone: this.normalizePhoneNumber(
//           e.target.value,
//           prevState.general.phone
//         ),
//       },
//     }));
//   };

//   submitEducationForm = (e) => {
//     e.preventDefault();

//     const {
//       location,
//       degree,
//       fieldOfStudy,
//       yearStarted,
//       yearFinished,
//       educationDescription,
//     } = this.state.education;

//     if (
//       !location ||
//       !degree ||
//       !fieldOfStudy ||
//       !yearStarted ||
//       !yearFinished ||
//       !educationDescription ||
//       yearStarted > yearFinished
//     )
//       return;

//     this.setState((prevState) => ({
//       ...prevState,
//       educationList: [...this.state.educationList, this.state.education],
//       education: {
//         uniqueId: `education${uniqid()}`,
//         location: "",
//         degree: "",
//         fieldOfStudy: "",
//         yearStarted: "",
//         yearFinished: "",
//         educationDescription: "",
//       },
//     }));
//   };

//   submitWorkForm = (e) => {
//     e.preventDefault();

//     const { company, position, workStarted, workFinished, workDescription } =
//       this.state.work;

//     if (
//       !company ||
//       !position ||
//       !workStarted ||
//       !workFinished ||
//       !workDescription ||
//       workStarted > workFinished
//     )
//       return;

//     this.setState((prevState) => ({
//       ...prevState,
//       workList: [...prevState.workList, prevState.work],
//       work: {
//         uniqueId: `work${uniqid()}`,
//         company: "",
//         position: "",
//         workStarted: "",
//         workFinished: "",
//         workDescription: "",
//       },
//     }));
//   };

//   deleteEducationEntry = (e) => {
//     const targetId = e.target.getAttribute("refid");

//     this.setState((prevState) => ({
//       ...prevState,
//       educationList: this.state.educationList.filter((education) => {
//         return education.uniqueId !== targetId;
//       }),
//     }));
//   };

//   deleteWorkEntry = (e) => {
//     const targetId = e.target.getAttribute("refid");

//     this.setState((prevState) => ({
//       ...prevState,
//       workList: this.state.workList.filter((work) => {
//         return work.uniqueId !== targetId;
//       }),
//     }));
//   };

//   toggleEducationEdit = (e) => {
//     const targetId = e.target.getAttribute("refid");

//     this.setState((prevState) => ({
//       ...prevState,
//       educationList: prevState.educationList.map((education) => {
//         if (education.uniqueId === targetId) {
//           const itemCopy = { ...education };

//           itemCopy.isEdit = !itemCopy.isEdit;
//           return itemCopy;
//         }
//         return education;
//       }),
//     }));
//   };

//   editExistingEducation = (e) => {
//     const targetId = e.target.getAttribute("refid");

//     this.setState((prevState) => ({
//       ...prevState,
//       educationList: prevState.educationList.map((education) => {
//         if (education.uniqueId === targetId) {
//           const itemCopy = { ...education };
//           itemCopy[e.target.id] = e.target.value;
//           return itemCopy;
//         }
//         return education;
//       }),
//     }));
//   };

//   editExistingWork = (e) => {
//     const targetId = e.target.getAttribute("refid");
//     console.log(e.target.value);

//     this.setState((prevState) => ({
//       ...prevState,
//       workList: prevState.workList.map((work) => {
//         if (work.uniqueId === targetId) {
//           const itemCopy = { ...work };
//           itemCopy[e.target.id] = e.target.value;
//           return itemCopy;
//         }
//         return work;
//       }),
//     }));
//   };
//   toggleWorkEdit = (e) => {
//     const targetId = e.target.getAttribute("refid");

//     this.setState((prevState) => ({
//       ...prevState,
//       workList: prevState.workList.map((work) => {
//         if (work.uniqueId === targetId) {
//           const itemCopy = { ...work };
//           itemCopy.isEdit = !itemCopy.isEdit;
//           return itemCopy;
//         }
//         return work;
//       }),
//     }));
//   };

//   render() {
//     const { general, education, work, educationList, workList } = this.state;
//     return (
//       <div className="container">
//         <EditWindow
//           general={general}
//           education={education}
//           work={work}
//           workList={workList}
//           educationList={educationList}
//           editGeneral={(e) => {
//             this.editGeneralField(e);
//           }}
//           editEducation={(e) => {
//             this.editEducationField(e);
//           }}
//           editWork={(e) => {
//             this.editWorkField(e);
//           }}
//           editPhoneNumber={(e) => {
//             this.editPhoneNumber(e);
//           }}
//           deleteEducationEntry={(e) => {
//             this.deleteEducationEntry(e);
//           }}
//           deleteWorkEntry={(e) => {
//             this.deleteWorkEntry(e);
//           }}
//           submitEducationForm={(e) => {
//             this.submitEducationForm(e);
//           }}
//           submitWorkForm={(e) => {
//             this.submitWorkForm(e);
//           }}
//           editYear={(e) => this.editYear(e)}
//           editWorkYear={(e) => {
//             this.editWorkYear(e);
//           }}
//           toggleEducationEdit={(e) => {
//             this.toggleEducationEdit(e);
//           }}
//           editExistingEducation={(e) => {
//             this.editExistingEducation(e);
//           }}
//           editExistingWork={(e) => {
//             this.editExistingWork(e);
//           }}
//           toggleWorkEdit={(e) => {
//             this.toggleWorkEdit(e);
//           }}
//         />
//         <DisplayWindow
//           general={general}
//           educationList={educationList}
//           workList={workList}
//         />
//       </div>
//     );
//   }
// }

export default CVContainer;

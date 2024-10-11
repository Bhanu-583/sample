import React, { useState } from "react";
import './Home.css'; // Import the CSS file for additional styling
import CloudComputing from '../../src/subjects/CSE/4-1/CloudComputing';
import EthicalHacking from "../../src/subjects/CSE/4-1/EthicalHacking";
import InternetOfThings from "../../src/subjects/CSE/4-1/InternetOfThings";
const Explore = () => {
  const [showDepartments, setShowDepartments] = useState(false);
  const [department, setDepartment] = useState(null);
  const [year, setYear] = useState(null);
  const [semester, setSemester] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [initial, setInitial] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [showPDF, setShowPDF] = useState(false); // State to control PDF visibility

  const departments = ["CSE", "ECE"];
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
  const semesters = ["Semester 1", "Semester 2"];
  const subjects = {
    "Semester 1": {
      "1st Year": ["Maths", "Physics", "Programming"],
      "2nd Year": ["Data Structures", "Circuits", "Algorithms"],
      "3rd Year": ["Operating Systems", "Networks", "Database Management"],
      "4th Year": ["Cloud Computing", "Ethical Hacking", "Internet of Things", "Digital Communications", "Deep Learning"]
    },
    "Semester 2": {
      "1st Year": ["Chemistry", "Electronics", "Python Programming"],
      "2nd Year": ["Advanced Circuits", "Signal Processing", "Software Engineering"],
      "3rd Year": ["Compilers", "AI", "Machine Learning"],
      "4th Year": ["Project Work", "Advanced Networking", "Blockchain"]
    }
  };

  const goBack = () => {
    if (showVideo) {
      setShowVideo(false);
    } else if (showPDF) {
      setShowPDF(false); // Hide the PDF viewer
    } else if (selectedSubject) {
      setSelectedSubject(null);
    } else if (semester) {
      setSemester(null);
    } else if (year) {
      setYear(null);
    } else if (department) {
      setDepartment(null);
      
    } else if (showDepartments) {
      setShowDepartments(false);
      setInitial(true); // Show the initial button again
      setShowInfo(true); // Show the info section again
    }
  };

  const startExploring = () => {
    setInitial(false);
    setShowDepartments(true);
    setShowInfo(false);
  };

  const handleSyllabusClick = () => {
    setShowPDF(true); // Show the PDF viewer
  };

  return (
    <div className="explore-container">
      <h1 className="main-heading">Welcome to Virtual Faculty – Your Ultimate Academic Resource Hub!</h1>

      {/* Information section */}
      {showInfo && (
        <div className={`info-section ${!showInfo ? "hidden" : ""}`}>
          <p>
            No matter what year or semester you’re in, Virtual Faculty has you covered! Our platform provides comprehensive PDFs and video lectures tailored to your exact curriculum. From beginner to advanced topics, we’ve organized everything by semester, so you can easily find the materials you need. Whether you're studying for exams, revising concepts, or exploring new subjects, Virtual Faculty is your go-to solution for quality academic resources.
          </p>
          <p>
            Join us today and get instant access to a wealth of knowledge, right at your fingertips! Let us help you succeed on your academic journey!
          </p>
        </div>
      )}

      {/* Initial button to start selection */}
      {initial && (
        <button onClick={startExploring} className="btn-shadow10">
          Let's Dive!
        </button>
      )}

      {/* Display selected department, year, semester, and subject in a laptop frame */}
      {(department || year || semester || selectedSubject) && (
        <div className="laptop-frame">
          <div className="screen">
            {department && <p>Selected Department: {department}</p>}
            {year && <p>Selected Year: {year}</p>}
            {semester && <p>Selected Semester: {semester}</p>}
            {selectedSubject && <p>Selected Subject: {selectedSubject}</p>}
          </div>
        </div>
      )}

      {/* Department selection */}
      {showDepartments && !department && (
        <div>
          <h3>Select Department:</h3>
          {departments.map((dept) => (
            <button key={dept} onClick={() => setDepartment(dept)} className="btn-shadow10">
              {dept}
            </button>
          ))}
        </div>
      )}

      {/* Year selection */}
      {department && !year && (
        <div>
          <h3>Select Year:</h3>
          {years.map((yr) => (
            <button key={yr} onClick={() => setYear(yr)} className="btn-shadow10">
              {yr}
            </button>
          ))}
        </div>
      )}

      {/* Semester selection */}
      {year && !semester && (
        <div>
          <h3>Select Semester:</h3>
          {semesters.map((sem) => (
            <button key={sem} onClick={() => setSemester(sem)} className="btn-shadow10">
              {sem}
            </button>
          ))}
        </div>
      )}

      {/* Subject selection */}
      {semester && !selectedSubject && (
        <div>
          <h3>Select Subject for {year} {semester}:</h3>
          <ul>
            {subjects[semester][year].map((subject, index) => (
              <button key={index} onClick={() => setSelectedSubject(subject)} className="btn-shadow10">
                {subject}
              </button>
            ))}
          </ul>
        </div>
      )}

      {/* Render the selected subject component */}
      {selectedSubject === "Cloud Computing" && <CloudComputing />}
      {selectedSubject === "Ethical Hacking" && <EthicalHacking />}
      {selectedSubject === "Internet of Things" && <InternetOfThings />}

      {/* Go Back button */}
      {(showDepartments || department || year || semester || selectedSubject) && (
        <button onClick={goBack} className="btn-shadow10">
          Go Back
        </button>
      )}
    </div>
  ); 
};

export default Explore;

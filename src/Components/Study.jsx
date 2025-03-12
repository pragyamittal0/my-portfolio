import React from "react";
import "./Education.css"; // Importing the CSS file

const Study = () => {
  const educationData = [
    {
      title: "MS IN COMPUTER SCIENCE",
      duration: "2023 - 2025",
      institution: "Texas A&M University, College Station, Texas",
      relevantCourses: [
        "Machine Learning",
        "Data Mining",
        "Information Storage and Retreival",
        "Deep Reinforcement Learning",
      ],
    },
    {
      title: "BTECH IN COMPUTER SCIENCE",
      duration: "2019 - 2023",
      institution: "Maharaja Surajmal Institute of Technology, GGSIPU, New Delhi",
    },
  ];

  const moocsData = [
    {
      courseName: "Generative AI fundamentals",
      image: "./databricks.png",
      instructor: "Databricks",
      link: "https://credentials.databricks.com/9d60ad2b-792d-4677-9b03-1c4473a3601b#acc.SuVp0OZz",
    },
    {
      courseName: "Introduction to LLMs",
      image: "./google.png",
      instructor: "Google",
      link: "https://www.cloudskillsboost.google/public_profiles/cc77d262-e4de-4543-9c43-0863de9314b5/badges/13349040",
    },
    {
      courseName: "Google BigQuery & PostgreSQL : Big Query for Data Analysis",
      image: "./udemy.png",
      instructor: "Udemy",
      link: "https://www.udemy.com/course/google-bigquery-and-postgresql-sql-for-data-analysis/learn/lecture/30422986?start=1#overview",
    },
    {
        courseName: "Python data structures",
        image: "./coursera.png",
        instructor: "Coursera and University of Michigan",
        link: "https://www.coursera.org/account/accomplishments/verify/D2HKXHA9XTEL",
      },
    {
      courseName: "Python",
      image: "./udemy.png",
      instructor: "Udemy",
      link: "https://www.udemy.com/course/python-for-beginners-learn-all-the-basics-of-python/learn/lecture/19660716?start=0#overview",
    },
    {
      courseName: "Introduction to Web Development",
      image: "./coursera.png",
      instructor: "Coursera and UC Davis",
      link: "https://www.coursera.org/account/accomplishments/certificate/E2D2NUPNVBAK",
    },
    {
      courseName: "React",
      image: "./udemy.png",
      instructor: "Udemy",
      link: "https://www.udemy.com/course/complete-react-course-w-hooks-react-router-redux-usecontext/learn/lecture/25122062?start=0#overview",
    },
    {
      courseName: "Introduction to Cybersecurity tools and cyber attacks",
      image: "./coursera.png",
      instructor: "Coursera and IBM",
      link: "https://www.coursera.org/account/accomplishments/certificate/DX3XD48XJHV6",
    },
  ];

  return (
    <div className="background">
    <div className="education-container">
      <h2 className="education-title">EDUCATION</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3 className="education-heading">{edu.title}</h3>
            <p className="education-duration">{edu.duration}</p>
            <p className="education-institution">{edu.institution}</p>
            {edu.relevantCourses && (
              <div className="relevant-courses">
                <h4 className="courses-title">Relevant Courses</h4>
                <ul className="courses-list">
                  {edu.relevantCourses.map((course, i) => (
                    <li key={i} className="course-item">{course}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
          

      {/* MOOCs Section */}
      <h2 className="moocs-title">MOOCs</h2>
      <div className="moocs-container">
        {moocsData.map((mooc, index) => (
          <div
            key={index}
            className="mooc-item"
            onClick={() => window.open(mooc.link, "_blank")} // Open link on click
            style={{ cursor: "pointer" }} // Show pointer cursor on hover
          >
            <img src={mooc.image} alt={mooc.courseName} className="mooc-image" />
            <div className="mooc-info">
              <h3 className="mooc-name">{mooc.courseName}</h3>
              <p className="mooc-instructor">Issuer: {mooc.instructor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Study;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Project.css"; 

const Project = () => {
  const navigate = useNavigate();

  const projectsData = [
    {
      id: 1,
      name: "Personalized Healthcare Treatment Using RL",
      image: "/image/p1.png",
      navigateTo: "/project-details/1",
    },
    {
      id: 2,
      name: "FashionMNIST Classifier",
      image: "/image/p2.png",
      navigateTo: "/project-details/2",
    },
    {
      id: 3,
      name: "Sentimental Analysis",
      image: "/image/p3.png",
      navigateTo: "/project-details/3",
    },
    {
        id: 4,
        name: "Oxywin",
        image: "/image/p4.png",
        navigateTo: "/project-details/4",
    },
    {
        id: 5,
        name: "Personalized Learning Toolkit",
        image: "/image/p5.png",
        navigateTo: "/project-details/5",
    },
  ];

  const handleProjectClick = (project) => {
    if (project.navigateTo) {
      navigate(project.navigateTo);
    }
  };

  return (
    <div className="project-bd">
    <div className="project-container">
      <h2 className="project-title">PROJECTS</h2>
      <div className="project-grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.image} alt={project.name} className="project-image" />
            <h3 className="project-name">{project.name}</h3>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Project;
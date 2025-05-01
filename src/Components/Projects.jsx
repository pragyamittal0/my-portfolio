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
      detail: "Designed an RL-based system using Q-learning and Deep Q-Networks (DQN) to personalize treatment plans, optimizing patient outcomes dynamically.  🚀",
      navigateTo: "/project-details/1",
    },
    {
      id: 2,
      name: "FashionMNIST Classifier",
      image: "/image/p2.png",
      detail:"Compared KNN, SVM, and decision trees with CNNs for fashion image classification. Preprocessed data with standardization and PCA, optimizing models for accuracy and efficiency. CNNs dominated with 91.98% accuracy, while RBF SVM and KNN provided strong alternatives with lower computational costs—offering key insights for real-world applications like retail automation and quality control. 🚀",
      navigateTo: "/project-details/2",
    },
    {
      id: 3,
      name: "Sentimental Analysis",
      image: "/image/p3.png",
      detail:"Built a sentiment analysis tool leveraging BERT to classify text into positive, negative, or neutral sentiments. The model provides high accuracy in understanding contextual sentiment from customer reviews and social media posts.",
      navigateTo: "/project-details/3",
    },
    {
        id: 4,
        name: "Oxywin",
        image: "/image/p4.png",
        detail:"A web-based platform developed during COVID-19 to streamline hospital oxygen logistics. It enables real-time tracking, order placement, and coordination between hospitals, suppliers, and transporters—ensuring efficient distribution and preventing shortages. 🚑🔗",
        navigateTo: "/project-details/4",
    },
    {
        id: 5,
        name: "Personalized Learning Toolkit",
        image: "/image/p5.png",
        detail:"An AI-driven system that curates tailored learning resources based on users’ knowledge levels and goals. It recommends courses, books, and videos from platforms like Coursera and Udemy, making self-paced learning more structured and engaging. 🚀",
        navigateTo: "/project-details/5",
    },
    {
      id: 6,
      name: "Food Safety Awareness Platform",
      image: "/image/p6.png",
      detail:"Promoting safe food practices in public venues using research, web technology, and data visualization.",
      navigateTo: "/project-details/6",
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
            <p className="project-detail">{project.detail}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Project;

import React from "react";
import { useParams } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams(); // Get project ID from URL

  const projectInfo = {
    1: {
      name: "Personalized Healthcare Treatment Using RL",
      image: "/image/project1.png", // Add project image
      description:
        "Traditional healthcare decision-making often relies on static models and predefined rules, which fail to adapt dynamically to a patient’s evolving condition. Our project introduces an AI-driven personalized healthcare framework leveraging Reinforcement Learning (RL) to optimize treatment strategies.",
      github: "https://github.com/pragyamittal0/AI-Driven-Personalized-Healthcare-Treatment-Using-Reinforcement-Learning/tree/main",
      starMethod: {
        situation:
          "Traditional healthcare treatment plans rely on static models, failing to adapt dynamically to a patient’s condition. This results in inefficiencies, higher costs, and suboptimal outcomes.",
        task: "The goal was to develop an RL-based framework that models healthcare decisions as a Markov Decision Process (MDP), enabling real-time, adaptive treatment strategies.",
        action:
          "✅ Designed an RL-based environment where patient data updated dynamically.\n✅ Implemented Deep Q-Networks (DQN) and Proximal Policy Optimization (PPO).\n✅ Processed real-world medical data (vitals, medication, demographics).\n✅ Fine-tuned models for optimal performance.",
        result:
          "🚀 The RL-based models outperformed traditional methods:\n✅ Higher cumulative rewards, indicating improved patient outcomes.\n✅ Adaptive decision-making based on evolving patient data.\n✅ PPO excelled in handling continuous action spaces.",
      },
    },
    2: {
      name: "FashionMNIST Classifier",
      image: "/image/project2.png",
      description:
        "Our project evaluated various image classification algorithms on the FashionMNIST dataset, comparing traditional machine learning models (KNN, logistic regression, decision trees, and SVMs) with deep learning approaches (CNNs). We preprocessed the dataset by standardizing features, applying PCA for dimensionality reduction, and splitting the data into training, validation, and test sets. Multiple models were trained, optimized, and evaluated using accuracy, precision, recall, and F1-score. The results showed that CNNs achieved the highest accuracy (91.98%) due to their ability to learn hierarchical spatial features, while RBF SVM and KNN performed competitively with lower computational costs. This study highlights the trade-offs between different classification approaches, offering insights for researchers and practitioners in selecting suitable models based on task complexity, dataset size, and efficiency, with potential applications in retail automation, quality control, and product categorization.",
      github: "https://github.com/akshatowl/FashionMNISTClassifiers/tree/master",
      starMethod: {
        situation: "Our team was tasked with evaluating various image classification algorithms on the FashionMNIST dataset. The goal was to compare traditional machine learning models such as logistic regression, decision trees, SVMs, and KNN with deep learning approaches like Convolutional Neural Networks (CNNs). The challenge was to determine which model provided the best balance of accuracy, efficiency, and interpretability.",
        task: "We needed to preprocess the dataset, implement multiple classification models, optimize hyperparameters, and compare their performance using key evaluation metrics such as accuracy, precision, recall, and F1-score. Additionally, we aimed to analyze the computational trade-offs between traditional ML models and CNNs.",
        action:
          "✅ Preprocessing: Standardized the dataset, applied PCA for dimensionality reduction, and split the data into training, validation, and test sets.\n✅ Implementation: Trained multiple models, including KNN, logistic regression, decision trees, linear SVM, RBF SVM, and CNNs.\n✅ Optimization: Tuned hyperparameters such as learning rates, the number of neighbors in KNN, and the kernel functions in SVM.\n✅ Evaluation: Measured performance using confusion matrices, accuracy, and other relevant metrics, analyzing trade-offs between computational efficiency and classification accuracy.\n✅ Analysis & Business Perspective: Examined how image classification can be applied in retail for product categorization, quality control, and automation.",
        result:
          "🚀 CNN achieved the highest accuracy (91.98%) due to its ability to capture spatial hierarchies in image data.\n✅ RBF SVM and KNN performed well among traditional models, demonstrating the effectiveness of combining PCA with classical approaches.\n✅ The study provided insights into selecting appropriate models based on task complexity, dataset size, and computational constraints.\n✅ The project contributed valuable recommendations for researchers and practitioners in image classification.",
      },
    },
    3: {
      name: "Sentimental Analysis",
      image: "/image/project3.png",
      description:
        "This project focuses on sentiment analysis using the BERT model to classify customer reviews from Yelp into positive, neutral, and negative sentiments. Traditional sentiment analysis models often struggle to capture nuanced meanings in text, leading to inaccurate classifications. To address this, the project leveraged data preprocessing techniques such as tokenization, stopword removal, and handling imbalanced data. A pre-trained BERT model was fine-tuned for sentiment classification, optimizing hyperparameters to enhance accuracy while preventing overfitting. The final model achieved 84% accuracy, demonstrating its effectiveness in understanding customer sentiment. This approach has potential applications in multilingual sentiment analysis and other NLP tasks.",
      github: "https://github.com/pragyamittal0/sentiment-analysis---Bert-",
      starMethod: {
        situation: "In the field of Natural Language Processing (NLP), sentiment analysis plays a crucial role in understanding consumer opinions. Traditional models struggle to capture contextual meaning effectively, leading to limitations in accuracy. The challenge was to improve sentiment analysis performance using advanced deep learning techniques.",
        task: "The goal was to develop a sentiment analysis model using the BERT (Bidirectional Encoder Representations from Transformers) model. The project aimed to classify consumer sentiments from Yelp reviews into positive, neutral, or negative categories. The challenge included data preprocessing, handling imbalanced data, and fine-tuning the model for optimal accuracy.",
        action:
          "✅ Data Preprocessing: Used Pandas and NLTK to clean the text, remove stopwords, and tokenize data.\n✅ Handling Data Imbalance: Checked class distribution and applied stratified sampling.\n ✅ Model Training: Implemented a pre-trained BERT model, fine-tuned it on the Yelp dataset, and optimized hyperparameters.\n ✅ Performance Evaluation: Measured precision, recall, and F1-score to ensure model effectiveness. \n ✅ Optimization: Adjusted batch size and epochs to prevent overfitting and memory overload.",
        result:
          "🚀 The final model achieved 84% accuracy, with high precision for positive and negative sentiments.\n✅ Successfully predicted sentiment on real-world test cases, validating its reliability. \n ✅Provided insights into consumer opinions, with potential for applications in multilingual datasets in future research.",
      },
    },
    4: {
      name: "Oxywin",
      image: "/image/project4.png", // Add project image
      description:
        "Oxywin is a web-based platform designed during the COVID-19 crisis to streamline oxygen supply management for hospitals. It serves as a centralized system where hospitals can update their oxygen availability, storage capacity, and estimated survival time, enabling authorities to plan efficient distribution. The platform allows hospitals to place oxygen orders directly with vendors, who can then coordinate with transporters for timely deliveries. A real-time dashboard provides status tracking, ensuring transparency and effective resource allocation. By bridging the communication gap between hospitals, suppliers, and transporters, Oxywin helps optimize oxygen logistics and prevent critical shortages.",
      github: "https://github.com/hackathonteams/Oxywin/tree/main",
      starMethod: {
        situation:
          "During the COVID-19 crisis, hospitals faced severe oxygen shortages, and the lack of real-time communication between hospitals, suppliers, and transporters led to inefficiencies in distribution. Delays in oxygen supply often resulted in critical medical emergencies.",
        task: "The goal was to develop a centralized online platform (Oxywin) that enables hospitals to update their oxygen status, place orders with vendors, and allow vendors to coordinate with transporters for timely deliveries. The system aimed to ensure real-time tracking and efficient distribution of oxygen resources.",
        action:
          "✅ Developed a web-based portal where hospitals could update oxygen levels, storage capacity, and remaining supply time.\n✅ Integrated an ordering system for hospitals to request oxygen directly from vendors.\n✅ Enabled vendors to forward hospital orders to transporters for efficient delivery coordination.\n ✅ Designed a dashboard to provide real-time status tracking of orders, ensuring transparency among stakeholders. \n ✅ Ensured that authorities could monitor overall oxygen supply and demands, facilitating better decision-making.",
        result:
          "🚀 Created a streamlined, real-time system that improved oxygen distribution efficiency during the crisis.\n✅ Reduced delays in oxygen supply by enabling hospitals, vendors, and transporters to coordinate seamlessly.\n✅ Provided a centralized dashboard for better monitoring and decision-making. \n ✅ Enhanced transparency, ensuring that resources were allocated effectively to hospitals in need.",
      },
    },
    5: {
      name: "Personalized Learning Toolkit",
      image: "/image/project5.png", // Add project image
      description:
        "The Personalized Learning Toolkit is an intelligent recommendation system designed to tailor learning resources based on an individual's knowledge level and learning goals. By gathering information about what users want to learn and assessing their existing knowledge, the system curates a customized list of courses (from platforms like Coursera and Udemy), open books, and YouTube playlists. This ensures that users receive the most relevant and structured learning materials, optimizing their educational journey and making self-paced learning more effective and engaging.",
      github: "https://github.com/Team-Coding-Clan/Personalized-Learning-Toolkit/tree/main",
      starMethod: {
        situation:
          "Many learners struggle to find the right educational resources that match their knowledge level and learning objectives. With the vast number of online courses, books, and tutorials available, it can be overwhelming to identify the most suitable learning path.",
        task: "The goal was to create a Personalized Learning Toolkit that gathers user preferences, assesses prior knowledge, and recommends tailored learning materials, including online courses, open books, and YouTube playlists. This would help learners efficiently navigate their educational journey.",
        action:
          "✅ Developed a system that asks users about their learning goals and evaluates their current knowledge level.\n✅ Integrated APIs from Coursera, Udemy, and YouTube to fetch relevant courses and playlists.\n✅ Curated a database of open books and learning resources for deeper knowledge exploration.\n ✅ Implemented an intelligent recommendation algorithm to match users with the most relevant educational materials. \n ✅Designed a user-friendly interface that provides a structured learning roadmap.",
        result:
          "🚀 Enabled users to receive personalized learning recommendations, reducing the time spent searching for the right resources.\n✅ Improved learning efficiency by ensuring that courses and materials matched users’ existing knowledge levels.\n✅ Provided a diverse range of resources, including structured courses, self-paced open books, and engaging video tutorials.",
      },
    },
  };

  const project = projectInfo[id];

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div className="project-background">
    <div className="project-details-container">
      {/* Project Image */}
      

      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
        View on GitHub <FaExternalLinkAlt />
      </a>

      {/* STAR Method Section */}
      <div className="star-method">
        

        <div className="star-section">
          <h4>📌 Situation (S)</h4>
          <p>{project.starMethod.situation}</p>
        </div>
        <div className="star-section">
          <h4>📌 Task (T)</h4>
          <p>{project.starMethod.task}</p>
        </div>
        <div className="star-section">
          <h4>📌 Action (A)</h4>
          {project.starMethod.action.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className="star-section">
          <h4>📌 Result (R)</h4>
          {project.starMethod.result.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <img src={project.image} alt={project.name} className="project-image" />
      </div>
    </div>
    </div>
  );
};

export default ProjectDetails;

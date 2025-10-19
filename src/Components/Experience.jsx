import React from "react";
import "./Experience.css"; // Importing the CSS file

const Experience = () => {
  const ExperienceData = [
    {
      title: "Machine Learning Engineer/ data scientist/ data engineer",
      duration: "September, 2025 - Present",
      institution: "Emotionall",
      description:
        "Led integration of Admin Panel, MixPanel, RevenueCat, and OneSignal, defining scalable data pipelines, secure APIs, and cross-tool syncing architecture—achieved 99.9% data reliability and reduced debugging time by 30%.Developing a Gamification Progress Tracker algorithm for a mental wellness app to drive habit formation—designing XP systems,streak-based rewards, milestone tracking, and emotional insight reports to improve engagement and retention. Performed data scraping of oil \& gas firms and unit testing of frontend events, ensuring analytics accuracy and schema consistency.",
    },
    {
      title: "Software Engineer - GenAI",
      duration: "September, 2025 - Present",
      institution: "Saayam For All",
      description:
        "I helped build a tracking system to measure both speed and quality across LLMs—capturing TTFT/TTLT, tokens per second, token counts, temperature, and a simple quality score—then ran batch evaluations on roughly 200 prompts × 1,000 queries to benchmark models and prompts. I also created reusable prompt templates with clean Markdown rendering so answers stay consistent and easy to scan. Together, these changes reduced manual editing time by 30–40% and made it much faster to compare providers and roll out prompt updates.",
    },
    {
      title: "Graduate Research Assistant – AI-Driven Financial Analysis",
      duration: "August - October, 2024",
      institution: "Mays Business School",
      description:
        "I automated the collection and analysis of financial data from multiple online sources using the Beautiful Soup Python library, which streamlined the data extraction process and reduced manual collection time by 35%, significantly improving data accuracy. Additionally, I implemented a secured ChatGPT API to enhance client satisfaction by 25%, providing more accurate financial reports and actionable insights that helped clients make informed decisions more effectively.",
    },
    {
      title: "Data Analyst (Student Assistant)",
      duration: "June - August, 2024",
      institution: "The Stochastic Geomechanics Laboratory",
      description:
        "Developed a Gini index model to measure and visualize resource distribution in pharma supply chain projects, improving operational efficiency and reducing resource allocation time by 25%. Analyzed the decline in Cisplatin drug usage using Python and ArcGIS, enhancing stakeholder engagement by 40% through data-driven storytelling. Created advanced data visualizations with Matplotlib to simplify complex pharma supply chain data, leading to a 20% reduction in analysis time and improved decision-making.",
      link: "https://drive.google.com/file/d/1oTop3bsrHFAoL8DbRUpfrIlOMk-BteVD/view?usp=sharing",
    },
  ];

  const researchData = [
    {
      title: "Empirical Evaluation of Tetrad Optimization Methods for Test Case Selection and Prioritization",
      mentor: "Dr Nishtha Jatana",
      description:
        "This research paper aimed to empirically evaluate the effectiveness of various optimization methods for test case selection and prioritization in software testing. By integrating machine learning and artificial intelligence, I analyzed different approaches to enhance the efficiency of test case execution. The study provided quantifiable insights into improving software testing processes, reducing redundancy, and enhancing fault detection rates.",
    },
    {
      title: "AlgoViz - Algorithm Visualizer",
      mentor: "Dr. Geetika Dhand",
      description:
        "AlgoViz is an interactive algorithm visualization tool designed to make learning and understanding algorithms more accessible. Developed using the MERN stack (MongoDB, Express, React, and Node.js), this project transformed traditional instructional methods by providing real-time visual representations of algorithmic processes. Through this research, I explored experiential technology and user experience design, ensuring an intuitive interface that helps students grasp complex algorithms with ease.",
    },
  ];

  // Open Source Data
  const openSourceData = [
    {
      title: "MLH: Major League Hacking",
      subdescription: "A global student hacker community and organization that empowers the next generation of tech talent through hackathons, conferences, and its flagship Fellowship program, with the mission to empower hackers.",
      description:
        "Participated in Global MLH (Major League Hacking) Week 🌍, where we explored exciting technologies such as the Twilio API and Sandbox for building real-time communication applications. During the week, I had the opportunity to work on innovative projects like developing an Instagram Bot 📸 and a Discord Bot 🤖, both of which integrated seamlessly with Twilio’s powerful tools to automate and enhance user interactions.",
        link: "https://github.com/pragyamittal0/Instabot",
    },
    {
      title: "Hacktoberfest",
      subdescription: "Hacktoberfest is an open-source celebration that brings people together from all over the world to make a positive impact on open source.",
      description:
        "Contributed to multiple repositories during Hacktoberfest 🎉, where I not only submitted pull requests to enhance various open-source projects but also deepened my understanding of documentation 📚. Through this experience, I learned how to write clear, concise documentation that helps other developers navigate and contribute to projects more effectively. It was a fantastic opportunity to give back to the open-source community and sharpen my skills!",
      link: "https://github.com/pragyamittal0/Hacktoberfest",
    },
    
  ];

  return (
    <div className="experience-background">
      <div className="experience-container">
        <h2 className="experience-title">EXPERIENCE</h2>
        <div className="experience-timeline">
          {ExperienceData.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3 className="experience-heading">{exp.title}</h3>
              <p className="experience-institution">{exp.institution}</p>
              <p className="experience-duration">{exp.duration}</p>
              <p className="experience-description">{exp.description}</p>
              {exp.link && (
                <p>
                  <a href={exp.link} className="experience-link" target="_blank" rel="noopener noreferrer">
                    Learn More 🔗
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Research Experience */}
        <h2 className="experience-title">RESEARCH EXPERIENCE</h2>
        <div className="experience-timeline">
          {researchData.map((mooc, index) => (
            <div key={index} className="experience-item">
              <h3 className="experience-heading">{mooc.title}</h3>
              <p className="experience-duration">{mooc.mentor}</p>
              <p className="experience-description">{mooc.description}</p>
            </div>
          ))}
        </div>

        {/* Open Source Work Section */}
        <h2 className="experience-title">OPEN SOURCE WORK</h2>
        <div className="experience-timeline">
          {openSourceData.map((project, index) => (
            <div key={index} className="experience-item">
              <h3 className="experience-heading">{project.title}</h3>
              <p className="experience-description">{project.subdescription}</p>
              <p className="experience-description">{project.description}</p>
              <p>
                <a href={project.link} className="experience-link" target="_blank" rel="noopener noreferrer">
                  View Project 🔗
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

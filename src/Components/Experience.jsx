import React from "react";
import "./Experience.css"; // Importing the CSS file

const Experience = () => {
  const ExperienceData = [
    {
      title: "Data Analyst",
      duration: "December, 2025 - Present",
      institution: "Mays Business School(Dept of Marketing)",
      description: [
      "Developed and implemented an automated data collection and analysis pipeline using Python (Selenium) and Google Colab.",
      "Systematically scraped and processed data from over 2,000 retail outlets for market analysis, reducing manual data collection time by 90% and generating key business insights that informed a new sales strategy and increased projected revenue by 5%."
      ],
      techStack:
        "Python, Google Colab, Gemini"
    },
    {
      title: "Software Engineer - GenAI",
      duration: "September, 2025 - Present",
      institution: "Saayam For All",
      description: [
        "Built a tracking system to measure TTFT/TTLT, tokens per second, token counts, temperature, and quality scores across LLMs.",
        "Ran large-scale batch evaluations on ~200 prompts × 1,000 queries to benchmark models and prompts.",
        "Created reusable prompt templates with clean Markdown rendering to maintain consistent and readable outputs.",
        "Reduced manual editing time by 30–40% and accelerated model comparison and rollout processes."
      ],
      techStack:
        "Python, OpenAI API, Pandas, NumPy, REST APIs, Markdown, Google Gemini"
    },
    {
      title: "Machine Learning Engineer/ data scientist/ data engineer",
      duration: "September, 2025 - November, 2025",
      institution: "Emotionall",
      description: [
        "Led integration of Admin Panel, MixPanel, RevenueCat, and OneSignal—building scalable data pipelines and secure APIs.",
        "Designed cross-tool syncing architecture achieving 99.9% data reliability and reducing debugging time by 30%.",
        "Developed a Gamification Progress Tracker algorithm: XP logic, streak rewards, milestone tracking, and emotional insight reporting.",
        "Performed data scraping of oil & gas firms and implemented unit tests for frontend events to ensure schema consistency.",
        "Perfomed App testing using Testflight to ensure the working of the app."
      ],
      techStack:
        "Python, SQL, Mixpanel, RevenueCat, OneSignal, REST APIs, AWS(S3, lambda, api, grafana), API testing(postman), Testflight(app testing)"
    },
    {
      title: "Graduate Research Assistant – AI-Driven Financial Analysis",
      duration: "August - October, 2024",
      institution: "Mays Business School",
      description: [
        "Automated financial data(SEC/EDGAR) extraction using BeautifulSoup, reducing manual collection time by 35% and increasing accuracy.",
        "Implemented secured ChatGPT API workflows to deliver enhanced financial summaries.",
        "Increased client satisfaction by 25% through more accurate reports and actionable insights."
      ],
      techStack:
        "Python, BeautifulSoup, Pandas, NumPy, ChatGPT API"
    },
    {
      title: "Data Analyst (Student Assistant)",
      duration: "June - August, 2024",
      institution: "The Stochastic Geomechanics Laboratory",
      description: [
        "Developed a Gini index model to measure and visualize resource distribution for pharma supply chain projects.",
        "Improved operational efficiency and reduced resource allocation time by 25%.",
        "Analyzed Cisplatin drug decline using Python and ArcGIS—improving stakeholder engagement by 40% through data storytelling.",
        "Built advanced visualizations using Matplotlib to simplify complex insights, reducing analysis time by 20%."
      ],
      techStack:
        "Python, ArcGIS, Matplotlib, Pandas, NumPy, GoogleColab, Excel, Canva(Presentation)",
      link: "https://drive.google.com/file/d/1oTop3bsrHFAoL8DbRUpfrIlOMk-BteVD/view?usp=sharing"
    }
  ];

  const researchData = [
    {
      title:
        "Empirical Evaluation of Tetrad Optimization Methods for Test Case Selection and Prioritization",
      mentor: "Dr Nishtha Jatana",
      description: [
        "Evaluated multiple optimization methods for software test case selection and prioritization.",
        "Integrated ML and AI approaches to analyze execution efficiency and fault detection.",
        "Produced quantifiable insights that improved software testing processes and reduced redundancy."
      ],
      techStack:
        "Python, Machine Learning, Optimization Techniques, Scikit-learn"
    },
    {
      title: "AlgoViz - Algorithm Visualizer",
      mentor: "Dr. Geetika Dhand",
      description: [
        "Built an interactive algorithm visualization tool using the MERN stack.",
        "Enabled real-time representation of algorithm execution to improve comprehension.",
        "Designed an intuitive UI that enhances experiential learning for complex algorithms."
      ],
      techStack:
        "MongoDB, Express, React, Node.js (MERN stack)"
    }
  ];

  const openSourceData = [
    {
      title: "MLH: Major League Hacking",
      subdescription:
        "A global student hacker community empowering the next generation of tech talent through hackathons, conferences, and the Fellowship program.",
      description: [
        "Participated in Global MLH Week exploring Twilio API and Sandbox for real-time communication applications.",
        "Built an Instagram Bot 📸 and a Discord Bot 🤖 integrated with Twilio for automated user interactions.",
        "Gained hands-on experience with rapid prototyping and API-driven automation."
      ],
      techStack:
        "Python, JavaScript, Twilio API, Discord API, REST APIs",
      link: "https://github.com/pragyamittal0/Instabot"
    },
    {
      title: "Hacktoberfest",
      subdescription:
        "Hacktoberfest brings global developers together to contribute and improve open-source projects.",
      description: [
        "Contributed to multiple repositories with meaningful pull requests to enhance open-source tools.",
        "Strengthened documentation-writing skills—creating clean, helpful, and maintainable docs.",
        "Improved understanding of collaborative development and community-driven workflows."
      ],
      techStack:
        "Git, GitHub, Markdown, Open-source workflows, Pull Requests",
      link: "https://github.com/pragyamittal0/Hacktoberfest"
    }
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

              <ul className="experience-description">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {exp.techStack && (
                <p className="experience-description">
                  <strong>Tech Stack:</strong> {exp.techStack}
                </p>
              )}

              {exp.link && (
                <p>
                  <a
                    href={exp.link}
                    className="experience-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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

              <ul className="experience-description">
                {mooc.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {mooc.techStack && (
                <p className="experience-description">
                  <strong>Tech Stack:</strong> {mooc.techStack}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Open Source Work */}
        <h2 className="experience-title">OPEN SOURCE WORK</h2>
        <div className="experience-timeline">
          {openSourceData.map((project, index) => (
            <div key={index} className="experience-item">
              <h3 className="experience-heading">{project.title}</h3>
              <p className="experience-description">{project.subdescription}</p>

              <ul className="experience-description">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {project.techStack && (
                <p className="experience-description">
                  <strong>Tech Stack:</strong> {project.techStack}
                </p>
              )}

              <p>
                <a
                  href={project.link}
                  className="experience-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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

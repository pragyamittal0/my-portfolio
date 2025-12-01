import React from "react";
import "./Home.css"; // Import the CSS for styling

const Home = () => {
  const galleryImages = [
    "/gallary/ski.png",
    "/gallary/scuba.png",
    "/gallary/skydive.png",
    "/gallary/cherry bloosom.png",
    "/gallary/balloon.png",
    "/gallary/trek.png",
  ];

  return (
    <div className="home-background">
      {/* About Me Section */}
      <div className="home-container">
        <div className="image-section">
          <img src="/profile.png" alt="Pragya Mittal" />
        </div>
        <div className="about-me-section">
          <h2 className="about-heading">About Me</h2>
          <p>
            Howdy!<br /> I’m Pragya Mittal👩‍💻, a Texas A&M CS grad (M.S., May 2025 🎓) who loves turning messy data into clear, scalable AI solutions🤖.
            I work across ML, analytics, and experimentation—building models, clean pipelines, and human-friendly insights that move metrics
            when I’m not prototyping, I’m polishing: tests, docs, and dashboards that teams actually use. Let’s build something useful. 🚀
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Technical Skills 🛠️</h2>
        <ul>
          <li>💻 <b>Programming:</b> Python, JavaScript, C++</li>
          <li>🤖 <b>AI & Machine Learning:</b> TensorFlow, PyTorch, Scikit-Learn, BERT-transformer, Chatgpt API, NLP</li>
          <li>💻 <b>Data Engineering & Cloud:</b> AWS (S3, Lambda, Glue, Athena, CloudWatch), GCP, API Integration, Web Scraping (BeautifulSoup) </li>
          <li>📊 <b>Data Science & Analytics:</b> Pandas, NumPy, Matplotlib, Postgre SQL, Web-Scraping</li>
          <li>🌐 <b>Web Development:</b> React.js, HTML, CSS, Bootstrap</li>
        </ul>
      </div>

      {/* Awards & Recognitions Section */}
      <div className="awards-recognition">
        <h2>Awards & Recognitions 🏆</h2>
        <ul>
          <li>🎓 <b>Fellowship Scholarship (2023-2024)</b> – Recognized for academic excellence and contributions to the field.</li>
          <li>🚀 <b>Top 4 - HackYuva Hackathon</b> – Secured a top-4 position in an intense innovation-driven competition.</li>
          <li>🏅 <b>Top 10 - APIHacks</b> – Achieved a top-10 position in the hackathon conducted by IEEE Chandigarh University.</li>
        </ul>
      </div>

       {/* Extracurricular Activities Section */}
      <div className="extra-curricular">
        <h2>Extracurricular Activities 🎭</h2>
        <ul>
          <li>🧑‍⚖️ <b>Judge at HowdyHack (Texas A&M Hackathon)</b> – Evaluated projects on creativity, technical implementation, and real-world impact. Provided feedback to participants to help refine their ideas.</li>
          <li>🚀 <b>MLH Hackathon Enthusiast</b> – Built AI-powered applications & chatbots.</li>
          <li>📝 <b>Conference Presenter</b> – Presented my research paper (AlgoViz) at the <i>Fourth International Conference on Emerging Research in Electronics, Computer Science, and Technology</i>.</li>
          <li>🌍 <b>Volunteering</b> – Led a women's group for bootcamp learning and tech mentoring.</li>
        </ul>
      </div>

      {/* Image Gallery Section */}
      <div className="image-gallery">
        <h2 className="image-heading">✨ A little glimpse of my future adventures and dream destinations! 🌍✈️</h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

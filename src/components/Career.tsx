import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Education (Class X)</h4>
                <h5>MNHS</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
             Completed my Class X and developed a strong interest in technology, computers, and programming.
              This was the stage where my curiosity for software development started growing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary (Class XII)</h4>
                <h5>MNHS</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed my Class XII while continuing to explore programming and web technologies.
               During this time, I focused on strengthening my analytical thinking and problem-solving skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Software Engineering Student</h4>
                <h5>NIAT (NxtWave Institute of Advanced Technologies)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing B.Tech in Software Engineering at NIAT while actively learning Full-Stack Web Development,
               Data Structures, and Artificial Intelligence.
               Focused on building real-world projects and improving my development skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

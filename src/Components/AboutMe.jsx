// AboutMe.js
import React from "react";

const AboutMe = () => {
  
  const openGitHub = () => {
    // Replace 'https://github.com/your_username' with your GitHub profile URL
    window.open("https://github.com/BetulEseroglu", "_blank");
  };

  const openLinkedIn = () => {
    // Replace 'https://www.linkedin.com/in/your_username' with your LinkedIn profile URL
    window.open("https://www.linkedin.com/in/zumrakb/", "_blank");
  };
  return (
    <section className="aboutme">
      <h1 className="biggest">Hi, I am Hatice Betül!</h1>
      <h2 className="biggest2">Computer Engineer Student</h2>
      <p className="aboutme-text">
      As a 4rd-year computer engineering student, I have gained experience in developing applications
      and websites using Flutter, Java and Kotlin. I am skilled in using HTML and JavaScript for web
      development, and have completed several projects using these technologies.I am currently seeking
      a challenging internship opportunity in the field of computer engineering, where I can further
      develop my skills and gain practical experience. This is my 5th week assignment using the React
      component structure within the scope of the React course I attended at MEGA Software Academy.
      </p>
      <div className="buttons">
                <button className="github-button" onClick={openGitHub}>
          GitHub Link
        </button>
        <button className="linkedin-button" onClick={openLinkedIn}>
          Linkedin Link
        </button>
      </div>
    </section>
  );
};

export default AboutMe;

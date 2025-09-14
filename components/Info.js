import React from "react";

// import images from src/images
import profile from "../images/profile.jpg";
import emailIcon from "../images/email-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";

export default function Info() {
  return (
    <header className="info">
      <img className="avatar" src={profile} alt="Profile" />

      <h1 className="name">Ethan Tesfai</h1>
      <p className="role">Fullstack Developer</p>
      <a
        className="site"
        href="https://ethantesfai.website"
        target="_blank"
        rel="noreferrer"
      >
        ethantesfai.com
      </a>

      <div className="btn-row">
        <a className="btn btn-light" href="mailto:ethantesfai.com">
          <img src={emailIcon} alt="Email" /> Email
        </a>
        <a
          className="btn btn-primary"
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" /> LinkedIn
        </a>
      </div>
    </header>
  );
}

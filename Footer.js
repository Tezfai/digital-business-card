import React from "react";

// import images directly from src/images
import twitter from "../images/twitter.jpg";
import facebook from "../images/facebook.jpg";
import instagram from "../images/instagram.jpg";
import github from "../images/github.jpg";

export default function Footer() {
  const icons = [
    { src: twitter, alt: "Twitter", href: "https://twitter.com" },
    { src: facebook, alt: "Facebook", href: "https://facebook.com" },
    { src: instagram, alt: "Instagram", href: "https://instagram.com" },
    { src: github, alt: "GitHub", href: "https://github.com" },
  ];

  return (
    <footer className="footer">
      {icons.map((i) => (
        <a
          key={i.alt}
          href={i.href}
          target="_blank"
          rel="noreferrer"
          aria-label={i.alt}
        >
          <img src={i.src} alt={i.alt} />
        </a>
      ))}
    </footer>
  );
}

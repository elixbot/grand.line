import React from 'react';
import './contentsection.css';

function ContentSection({ title, text }) {
  return (
    <section className="content-section">
      <h3>{title}</h3>
      <p>{text}</p>
    </section>
  );
}

export default ContentSection;

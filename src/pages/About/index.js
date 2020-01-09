import React from 'react';
import { Link } from 'react-router-dom';
import './stylesLink.css';

// import { Container } from './styles';

export default function About() {
  return (
    <>
      <div className="links">
        <Link to="/about/where-to-use">Onde usar| </Link>
        <Link to="/about/how-to-use">Como usar | </Link>
        <Link to="/about/how-to-earn">Como ganhar</Link>
      </div>

      <h1>Como funciona</h1>
    </>
  );
}

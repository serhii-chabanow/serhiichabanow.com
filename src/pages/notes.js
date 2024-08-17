// src/components/Header.js
import * as React from "react";


import "../styles/Notes.css";

export default function Notes() {
  return (
    <main>
      <div>
        <div className="first-paragraph not-found-content">
          <h1>Мої нотатки</h1>
          <p className="intro-paragraph ">
            З часом додам свої дописи сюди
          </p>

          <a href="/">На головну</a>
        </div>
      </div>
    </main>
  );
}

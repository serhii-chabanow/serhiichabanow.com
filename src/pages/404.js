// src/pages/404.js
import * as React from "react";

import "../styles/NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="page-not-found">
      <div className="not-found-content">
        <h1>Блін, сторінка гола! <br/> Не треба сюди дивитись!</h1>
        <p>
          Роблю цю сторінку зі швидкістю напіврозпаду Урану-234.
          <br/>
          А в той момент поки ця сторінка ще не готова заваріть собі чай, 
          увімкніть улюблену музику і просто дайте пару хвилин відпочити очам.
        </p>
        <a href="/">Відвернутись</a>
      </div>
    </div>
  );
}

export default NotFoundPage;

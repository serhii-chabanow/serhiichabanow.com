// src/pages/Home.js
import * as React from "react";
import "../styles/Home.css";
import icarus from "../images/Landscape_with_the_Fall_of_Icarus.jpg"; 

export default function Home() {
  return (
    <main>
      <div>
        <div className="first-paragraph">
          <h1>Хай, я Сергій</h1>
          <p className="intro-paragraph">
            Тож, я намагаюсь бути генералістом, абсурдистом/стоїком, 
            програмістом, науковцем, митцем і, в ідеалі, людиною епохи Відродження.
          </p>
        </div>

        <div className="content-block">
          <p className="second-paragraph">
            На цьому сайті ви можете побачити мої дописи про різні теми, 
            мої медіа й іншу інформацію, якою я живу.
            <br /><br />
           
            <br /><br />
            Продовження сайту loading, please wait...
          </p>



          <div className="photo-block">
            <img src={icarus} alt="Funny logo - cat" />
            <p className="image-text">
              Життя продовжиться ще якийсь час після того, як ви спалите власні крила.
              Спаліть їх так, щоб вам не було соромно за це перед собою.
            </p>
          </div>

         
        </div>
      </div>
    </main>
  );
}

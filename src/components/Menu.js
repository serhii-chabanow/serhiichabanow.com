import * as React from "react";
import { navigate } from "gatsby"; // Імпортуємо navigate

import "../styles/Menu.css";

export default function Menu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const menuRef = React.useRef(null);

  const toggleMenu = (event) => {
    event.preventDefault(); // Запобігаємо стандартній поведінці
    setIsOpen(!isOpen);
    setIsDropdownOpen(false); // Закриваємо випадаюче меню, коли меню згортається
  };

  const toggleDropdown = (event) => {
    event.preventDefault(); // Запобігаємо стандартній поведінці
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavigation = (url, event) => {
    event.preventDefault(); // Запобігаємо стандартній поведінці
    // Перевіряємо чи існує сторінка
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          navigate("/404"); // Якщо сторінка не існує, перенаправляємо на 404
        } else {
          navigate(url); // Інакше переходимо на сторінку
        }
      })
      .catch(() => {
        navigate("/404"); // Перенаправлення на 404 при помилці
      });
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
      setIsDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={menuRef}>
      {/* Бургерна кнопка */}
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`burger-bar ${isOpen ? "open" : ""}`}></div>
        <div className={`burger-bar ${isOpen ? "open" : ""}`}></div>
        <div className={`burger-bar ${isOpen ? "open" : ""}`}></div>
      </div>
      {/* Меню */}
      <ul className={`menu-list ${isOpen ? "show" : ""}`}>
        <li className="dropdown">
          <a href="#" className="dropbtn" onClick={toggleDropdown}>
            Моє життя
          </a>
          <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
            <a href="#" onClick={(event) => handleNavigation("/music", event)}>Музика</a>
            <a href="#" onClick={(event) => handleNavigation("/movies", event)}>Фільми</a>
            <a href="#" onClick={(event) => handleNavigation("/photos", event)}>Фото</a>
            <a href="#" onClick={(event) => handleNavigation("/hobbies", event)}>Хобі</a>
            <a href="#" onClick={(event) => handleNavigation("/documents", event)}>Документи</a>
            <a href="#" onClick={(event) => handleNavigation("/code", event)}>Код</a>
            <a href="#" onClick={(event) => handleNavigation("/other", event)}>Інше</a>
            <a href="#" onClick={(event) => handleNavigation("/about-me", event)}>Про мене</a>
          </div>
        </li>
        <li><a href="#" onClick={(event) => handleNavigation("/notes", event)}>Нотатки</a></li>
        <li><a href="#" onClick={(event) => handleNavigation("/projects", event)}>Проекти</a></li>
      </ul>
    </nav>
  );
}

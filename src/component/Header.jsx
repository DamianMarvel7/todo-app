import React, { useEffect, useState } from "react";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";
import { setDarkMode, setLightMode } from "../logic/theme";

const Header = () => {
  const selectedTheme = localStorage.getItem("selectedTheme");
  const [iconTheme, setIconTheme] = useState(iconMoon);
  useEffect(() => {
    if (selectedTheme === "dark") {
      setDarkMode();
      setIconTheme(iconSun);
    }
  }, [iconTheme]);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setIconTheme(iconSun);
      setDarkMode();
    } else {
      setIconTheme(iconMoon);
      setLightMode();
    }
  };

  return (
    <header>
      <div className="grid-column container">
        <h1>TODO</h1>
        <input
          type="checkbox"
          name=""
          id="toggle-theme"
          defaultChecked={selectedTheme === "dark"}
          className="hidden"
          onChange={toggleTheme}
        />
        <label htmlFor="toggle-theme">
          <img src={iconTheme} alt="" />
        </label>
      </div>
    </header>
  );
};

export default Header;

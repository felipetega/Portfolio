'use client'

import React, { useState, useEffect, ChangeEvent } from 'react';
import { themeChange } from 'theme-change';
import { FiSun, FiMoon } from 'react-icons/fi';
import { GiNightSky, GiEvilMoon, GiSun, GiHeartStake } from "react-icons/gi";

const ThemeButton = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    themeChange(false);
    // false parameter is required for react project
  }, []);

  const handleToggleTheme = (event: ChangeEvent<HTMLSelectElement>) => {
    const newMode = event.target.value;
    setMode(newMode);
  };

  let selectedIcon;
  switch (mode) {
    case "light":
      selectedIcon = <FiSun size={30} />;
      break;
    case "dark":
      selectedIcon = <GiNightSky size={30} />;
      break;
    case "halloween":
      selectedIcon = <GiEvilMoon size={30} />;
      break;
    case "valentine":
      selectedIcon = <GiHeartStake size={30} />;
      break;
    default:
      selectedIcon = <FiSun size={30} />;
  }

  return (
    <div>
      {selectedIcon}
      <select data-choose-theme value={mode} onChange={handleToggleTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="halloween">Halloween</option>
        <option value="valentine">Valentine</option>
      </select>
    </div>
  );
};

export default ThemeButton;

'use client'

import React, { useState, useEffect, ChangeEvent } from 'react';
import { themeChange } from 'theme-change';
import { FiSun, FiMoon } from 'react-icons/fi';
import { GiNightSky, GiEvilMoon, GiSun, GiHeartStake } from "react-icons/gi";

const ThemeButton = () => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setMode(savedMode);
      themeChange(savedMode === '');
    } else {
      setMode('light');
      themeChange(false);
    }
  }, []);

  const handleToggleTheme = (event: ChangeEvent<HTMLSelectElement>) => {
    const newMode = event.target.value;
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
    themeChange(newMode === '');
  };

  let selectedIcon;
  switch (mode) {
    case "light":
      selectedIcon = <FiSun size={30} className='text-yellow-500' />;
      break;
    case "dark":
      selectedIcon = <GiNightSky size={30} className='text-yellow-500' />;
      break;
    case "halloween":
      selectedIcon = <GiEvilMoon size={30} className='text-yellow-500' />;
      break;
    default:
      selectedIcon = <FiSun size={30} className='text-yellow-500' />;
  }

  return (
    <div>
      {selectedIcon}
      <select data-choose-theme value={mode} onChange={handleToggleTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="halloween">Halloween</option>
      </select>
    </div>
  );
};

export default ThemeButton;

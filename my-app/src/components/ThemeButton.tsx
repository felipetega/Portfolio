import React, { useState, useEffect } from 'react';
import { themeChange } from 'theme-change';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeButton = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    themeChange(false);
    // false parameter is required for react project
  }, []);

  const handleToggleTheme = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
  };

  return (
    <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" onClick={handleToggleTheme}>
      {mode === "dark" ? <FiMoon className="fill-black" /> : <FiSun className="fill-black" />}
    </button>
  );
};

export default ThemeButton;

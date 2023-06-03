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
<select data-choose-theme>
<option value="light">Light</option>
  <option value="dark">Dark</option>
  <option value="halloween">Halloween</option>
  <option value="valentine">Valentine</option>
</select>
  );
};

export default ThemeButton;

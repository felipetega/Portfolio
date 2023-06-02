'use client'

import React, { useState } from 'react'

export const ThemeButton = () => {

    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      };


  return (
    <button data-theme={theme} onClick={toggleTheme}>
        Mude o tema
    </button>
  )
}

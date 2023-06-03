import React, { useState } from 'react'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { FiSun , FiMoon } from 'react-icons/fi';



const ThemeButton = () => {

  const [mode, setMode] = useState()

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <button data-toggle-theme="dark,light,halloween" data-act-class="ACTIVECLASS">
                {
            mode === "dark" ?
            <FiSun className={'fill-black'} />
            : <FiMoon className={'fill-black'} />
          }
    </button>
  )
}

export default ThemeButton
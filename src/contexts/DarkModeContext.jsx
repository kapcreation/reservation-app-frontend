import React, { createContext, useContext, useEffect, useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export const DarkModeContext = createContext()

export const useDarkMode = () => useContext(DarkModeContext)

export const DarkModeProvider = ({ children }) => {

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const DarkModeToggle = () => {
    const [active, setActive] = useState(localStorage.theme === 'dark')

    function handleClick() {
      const darkMode = localStorage.theme === "dark"
   
      if (darkMode) {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
      } else {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
      }

      setActive(darkMode)
    }

    return (
      <button onClick={handleClick} className="hidden md:flex dark:text-white text-2xl">
        {
          active ?
          <WbSunnyIcon /> :
          <DarkModeOutlinedIcon />
        }
      </button>
    )
  }

  const value = { DarkModeToggle }

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  )
}
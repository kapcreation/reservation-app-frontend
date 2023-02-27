import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

  async function login(data) {
    const res = await axios.post(`${process.env.REACT_APP_API}/auth/login`, data)
    setUser(res.data)
  }

  async function register(data) {
    const res = await axios.post(`${process.env.REACT_APP_API}/auth/register`, data)
    setUser(res.data)
  }

  function logout() {
    localStorage.removeItem("user")
    setUser(null)
  }

  useEffect(() => {
    // console.log("user", user)
    localStorage.setItem("user", JSON.stringify(user))
  }, [user])
  

  const value={ user, login, register, logout }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
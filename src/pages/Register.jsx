import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const Register = () => {
  const { register } = useAuth()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      const data = Object.fromEntries(formData.entries())

      await register(data)
      navigate("/")
      setLoading(false)
    } catch (error) {
      console.error(error)
      if (error.response) setError(error.response.data)
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex min-h-[80vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Register</h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <div className="mb-2">
                <input
                  id="usernameInput"
                  name="username"
                  type="text"
                  required
                  className="w-full border-b border-gray-300 px-3 py-2 focus:outline-none focus:ring"
                  placeholder="Username"
                />
              </div>
              <div className="mb-2">
                <input
                  id="emailInput"
                  name="email"
                  type="email"
                  required
                  className="w-full border-b border-gray-300 px-3 py-2 focus:outline-none focus:ring"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-2">
                <input
                  id="passwordInput"
                  name="password"
                  type="password"          
                  required
                  className="w-full border-b border-gray-300 px-3 py-2 focus:outline-none focus:ring"
                  placeholder="Password"
                />
              </div>
            </div>
            {
              error && 
              <div className="w-full py-2 px-4 bg-red-500 text-red-100 font-semibold">
                {error}  
              </div>
            }

            <button disabled={loading} className="w-full rounded-md bg-primary py-2 px-4 font-semibold text-white focus:ring">Register</button>
          </form>

          <div className="text-right">
            <Link to="/login" className="font-medium text-primary text-sm hover:text-indigo-500">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
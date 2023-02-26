import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>
      <div className="flex min-h-[80vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Register</h2>

          <form className="mt-8 space-y-6">
            <div>
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

            <button className="w-full rounded-md bg-primary py-2 px-4 font-semibold text-white focus:ring">Register</button>
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
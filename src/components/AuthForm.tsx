import { useState } from "react";
import { signIn } from "../lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const signInUser = async (e: React.FormEvent) => {
    e.preventDefault()
      await signIn(email, password)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-purple-700 via-purple-600 to-purple-500">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl px-7 py-6">
        
        <h1 className="text-2xl font-bold text-center text-purple-700">
          Log in to flowva
        </h1>
        <p className="text-center text-gray-500 text-sm mt-2">
          Log in to receive personalized recommendations
        </p>

        
        <form className="mt-8 space-y-5" onSubmit={signInUser}>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="user@example.com"
              className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm pr-16 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-purple-600 font-medium"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="text-right">
            <button
              type="button"
              className="text-sm text-purple-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full transition"
          >
            Sign in
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-4">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-xs text-gray-400">or</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <button
            type="button"
            className="w-full border border-gray-200 rounded-lg py-3 flex items-center justify-center gap-3 text-sm font-medium hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <button className="text-purple-600 font-medium hover:underline">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

'use client'

import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleGoogle = async() =>{
  const data = await authClient.signIn.social({
    provider: "google",
  });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    })

    if (error) {
      toast.error(error.message)
      return
    }

    if (res) {
      toast.success("Login Successful")
    }
  }

  return (
    <div className="min-h-screen flex flex-col space-y-3 justify-center items-center bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-80 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-6"
      >
        <h1 className="text-4xl font-bold text-center mb-6">
          Log In
        </h1>

        <div className="space-y-4">

          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-3 py-2 rounded-xl bg-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your Email"
              {...register("email", {
                required: "Email field is required",
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <label className="text-sm">Password</label>

            <input
              type={showPassword ? "text" : "password"}
              className="w-full mt-1 px-3 py-2 pr-10 rounded-xl bg-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Password"
              {...register("password", {
                required: "Password field is required",
              })}
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 cursor-pointer text-gray-700 hover:text-purple-600 transition"
            >
              {showPassword ? (
                <FaEyeSlash size={18} />
              ) : (
                <FaEye size={18} />
              )}
            </span>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-purple-400 hover:scale-105 text-white transition duration-300 font-semibold shadow-lg"
          >
            Login
          </button>
        </div>
      </form>
       <div>
        <h2 className='text-center'>OR</h2>
        <button onClick={handleGoogle} className="btn w-full"> <FcGoogle />Login with Google</button>
       </div>
      <p className="text-white">
        If you don’t have an account{" "}
        <Link href="/Register" className="text-purple-600 font-medium">
          Click here
        </Link>
      </p>
    </div>
  )
}

export default LoginPage
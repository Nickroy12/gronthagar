'use client'

import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  console.log(watch('email'))
  return (
    <div className="min-h-screen flex flex-col space-y-3 justify-center items-center bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300">
      
      <form onSubmit={handleSubmit(onSubmit)} className="w-80 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-6">
        <legend className="text-4xl font-bold text-center mb-2">
          Log In
        </legend>

        <div className="space-y-3">
          <div>
            <label className="text-sm">Email</label>
            <input 
              type="email" 
              className="w-full mt-1 px-3 py-2 rounded-xl bg-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your Email" {...register("email",{
                required: "Email field is required"
              })} 
            />
                       {errors.password && (
  <p className="text-red-500 text-sm mt-1">
    {errors.password.message}
  </p>
)}
          </div>

          <div>
            <label className="text-sm">Password</label>
            <input 
              type="password" 
              className="w-full mt-1 px-3 py-2 rounded-xl bg-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Password" {...register("password",{
                required: "Password field is required"
              }) } 
            />
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

      <p className="text-white">
        If you don`t have account{' '}
        <Link href="/Register" className="text-purple-600">
          Click here
        </Link>
      </p>
    </div>
  )
}

export default LoginPage
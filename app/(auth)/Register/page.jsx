'use client'

import React from 'react'
import { useForm } from 'react-hook-form'

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-80 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-6"
      >
        <legend className="text-4xl font-bold text-center mb-2">
          Create Account
        </legend>

        <p className="text-sm text-center mb-4">
          Join us today 🚀
        </p>

        <div className="space-y-3">

          {/* Name */}
          <div>
            <label className="text-sm">Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full mt-1 px-3 py-2 rounded-xl bg-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
              {...register('name', {
                required: 'Name is required',
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="text-sm">Image Link</label>
            <input
              type="url"
              placeholder="Enter Image URL"
              className="w-full mt-1 px-3 py-2 rounded-xl bg-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
              {...register('image', {
                required: 'Image URL is required',
              })}
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full mt-1 px-3 py-2 rounded-xl bg-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
              {...register('email', {
                required: 'Email is required',
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-1 px-3 py-2 rounded-xl bg-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
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
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Registration
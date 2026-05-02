'use client'

import { authClient } from '@/lib/auth-client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const Registration = () => {
   const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit =  async(data) => {
    console.log(data)
    const {name , image , email , password} = data;

    const { data:res , error} = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password,
    image: image,
    callbackURL: "/",
    })
 console.log(res , error);
 if(error){
  toast.error(error.message)
  return
 }
 if(res){
  toast.success('Signup Successful !')
 }
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
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Registration
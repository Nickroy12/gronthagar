'use client'
import React, { useRef } from 'react'
import { authClient } from '@/lib/auth-client'

const UpdateModal = () => {
  const modalRef = useRef(null)

  const handleUpdate = async (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const image = e.target.image.value

    const { data, error } = await authClient.updateUser({
      name,
      image,
    })

    if (error) {
      console.log(error.message)
      return
    }

    console.log('Updated:', data)

    // Close modal after success
    modalRef.current?.close()
  }

  return (
    <div>
      <button
        className="btn bg-linear-to-r from-purple-500 to-purple-400 text-white"
        onClick={() => modalRef.current?.showModal()}
      >
        Update Profile
      </button>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box max-w-sm">

          {/* Close */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">
              ✕
            </button>
          </form>

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Update Profile</h2>
            <p className="text-sm opacity-70">
              Keep your information up to date
            </p>
          </div>

          {/* ✅ Form FIXED */}
          <form className="space-y-4" onSubmit={handleUpdate}>

            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                name="name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Image */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Profile Image URL</span>
              </label>
              <input
                type="text"
                placeholder="https://example.com/image.jpg"
                name="image"
                className="input input-bordered w-full"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn bg-linear-to-r from-purple-500 to-purple-400 w-full mt-2"
            >
              Save Changes
            </button>

          </form>

          <p className="text-center text-xs mt-5 opacity-60">
            Changes will be updated instantly after saving
          </p>

        </div>
      </dialog>
    </div>
  )
}

export default UpdateModal
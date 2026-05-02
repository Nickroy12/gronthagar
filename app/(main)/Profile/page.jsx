'use client'

import { authClient } from '@/lib/auth-client'
import UpdateModal from '@/ui/UpdateModal'
import Image from 'next/image'
import React from 'react'
import defaultImg from '@/public/default.jpg'

const Page = () => {
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user

  if (isPending) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }



  return (
    <div className="h-screen flex justify-center items-center bg-base-200 ">
      <div className="card bg-base-100 w-96 shadow-xl border-t-4 border-purple-600">
        <div className="card-body items-center text-center">

          {/* Avatar */}
          <div className="avatar">
            <div className="w-24 rounded-full">
              <Image
                src={user.image || defaultImg}
                alt="user"
                width={96}
                height={96}
              />
            </div>
          </div>

          {/* Name */}
          <h2 className="text-xl font-bold mt-3">
            {user.name || 'Unknown User'}
          </h2>

          <p className="text-sm opacity-70">
            {user.email}
          </p>

          <div className="card-actions mt-4">
            <UpdateModal/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page
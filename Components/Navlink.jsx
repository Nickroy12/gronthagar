'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({href , children}) => {
    const path = usePathname()
    const isActive = href === path
  return (
    <Link href={href} className={`px-4 py-2         transition-all duration-300 ease-in-out
         ${isActive ? 'border-b-2 border-purple-500 text-purple-500' : 'text-black'}`}>{children}</Link>
  )
}

export default NavLink
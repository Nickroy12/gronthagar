"use client";
import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../Navlink";
import { authClient } from "@/lib/auth-client";
import defaultImg from "@/public/default.jpg";
import { MdMenuBook } from "react-icons/md";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const links = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/Book">All Books</NavLink>
      </li>

    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10"
          >
            {links}
          </ul>
        </div>

        <Link href="/">
          <Image src={logo} width={120} height={120} alt="Logo" />
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 px-1">{links}</ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        {isPending ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : user ? (
          <div className="flex items-center gap-3">
            <span className="font-medium">{user.name}</span>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="relative cursor-pointer"
              >
                {/* Avatar */}
                <Image
                  src={user.image || defaultImg}
                  width={40}
                  height={40}
                  alt="User Avatar"
                  className="rounded-full border-2 border-purple-500"
                />

                {/* Icon badge */}
                <MdMenuBook className="absolute -bottom-1 -right-1 text-purple-500 bg-white rounded-full text-lg" />
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box w-52 mt-3 shadow z-10"
              >
                <li>
                  <Link href="/Profile">Profile</Link>
                </li>
                <li>
                  <button onClick={() => authClient.signOut()}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link
            href="/Login"
            className="btn bg-gradient-to-r from-purple-500 to-purple-400 text-white rounded-full"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
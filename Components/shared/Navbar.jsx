"use client";
import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../Navlink";
import { authClient } from "@/lib/auth-client";

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
      {!user && (
        <li>
          <NavLink href="/login">User Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link href="/">
          <Image src={logo} width={120} height={120} alt="Website Logo" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {isPending ? (
          <div>Loading...</div>
        ) : user ? (
          <div className="flex items-center gap-3">
            <span>{user.name}</span>

            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button">
                {user.image && (
                  <Image
                    src={user.image}
                    width={40}
                    height={40}
                    alt="User Avatar"
                    className="rounded-full border-4 border-purple-500 cursor-pointer"
                  />
                )}
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 shadow"
              >
                <li>
                  <Link href="/">Profile</Link>
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
            className="btn bg-linear-to-r from-purple-500 to-purple-400 rounded-4xl text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
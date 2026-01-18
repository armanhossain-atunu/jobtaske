"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import LoginButton from "../LoginButton";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar py-2 w-11/12 mx-auto">

        {/* Left logo section */}
        <div className="navbar-start">
          <Link href="/" className="text-2xl font-bold">
            Code<span className="text-primary">Fiy</span>
          </Link>
        </div>

        {/* Center menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink />
          </ul>
        </div>

        {/* Right side user menu */}
        <div className="navbar-end">

          {status === "authenticated" ? (
            // If Logged In
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10">
                  <p className=" w-10 h-10">
                    <Image src={'https://i.ibb.co.com/G35J68cR/avatar2.jpg'} alt={session?.user?.name} width={40} height={40} className="rounded-full" />
                  </p>
                </div>
              </div>

              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                <li><p>Admin</p></li>
                <li> {session?.user?.email}</li>
                <li>
                  <button
                    onClick={() =>
                      signOut({
                        callbackUrl: `${window.location.origin}/`,
                      })
                    }
                  >
                    Logout
                  </button>
                </li>
              </ul>

            </div>
          ) : (
            // If Not Logged In
            <LoginButton />
          )}

        </div>

      </div>
    </div>
  );
};

export default Navbar;

import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useLocation } from "react-router-dom";
import { logOut } from "../../features/auth/authSlice";
import auth from "../../firebase/firebase.config";

const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { user: { email, role } } = useSelector((state) => state.auth);
  // const { email, role } = user;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logOut());
      }
      )
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <nav
      className={`h-14 py-5 max-w-7xl mx-auto fixed w-full z-[999] ${pathname === "/" ? null : "bg-white"
        }`}
    >
      <div className="flex justify-between items-center">
        <div>
          <ul>
            <li className=' font-semibold text-2xl'>
              <Link to='/'>JobBox</Link>
            </li>
          </ul>
        </div>
        <div className="pr-10">
          <ul className=' flex gap-3 h-full items-center '>
            <li>
              <Link className='hover:text-primary' to='/jobs'>
                Jobs
              </Link>
            </li>
            {
              email && role && (
                <li>
                  <Link className='hover:text-primary' to='/dashboard'>
                    Dashboard
                  </Link>
                </li>
              )
            }
            {
              email && !role && (
                <li>
                  <Link className='hover:text-primary' to='/register'>
                    Get Started
                  </Link>
                </li>
              )
            }

            {
              email ? (
                <button
                  onClick={() => handleSignOut()}
                  className="hover:text-primary" type="">Log Out</button>
              ) :
                <li>
                  <Link
                    className='border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all '
                    to='/login'
                  >
                    Login
                  </Link>
                </li>
            }

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

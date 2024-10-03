'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const pages = ['About', 'Why', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

  return (
    <header className="bg-[#7b7bc2] text-white w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-3">
        <div className="flex justify-between items-center w-full flex-wrap">
          <button onClick={toggleNav} className="md:hidden focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          <Link href="/" className="hidden md:flex items-center text-2xl font-bold tracking-widest">
            Task Master
          </Link>

          <ul className="hidden md:flex space-x-8">
            {pages.map((page) => (
              <li key={page}>
                <Link href={`/${page.toLowerCase()}`} className="hover:text-gray-300">
                  {page}
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative">
            <button onClick={toggleUserMenu} className="focus:outline-none">
              <img className="h-10 w-10 rounded-full" src="https://via.placeholder.com/40" alt="Avatar" />
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 text-gray-700">
                {settings.map((setting) => (
                  <Link href={`/${setting.toLowerCase()}`} key={setting} className="block px-4 py-2 hover:bg-gray-200">
                    {setting}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {navOpen && (
          <div className="md:hidden mt-4">
            <ul className="space-y-4">
              {pages.map((page) => (
                <li key={page}>
                  <Link href={`/${page.toLowerCase()}`} className="block text-white hover:text-gray-300">
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

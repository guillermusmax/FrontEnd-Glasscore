"use client"
import React from 'react'
import Link from 'next/link'


import { usePosicionScroll } from '@/hooks/usePosicionScroll'
const Header = () => {
    const PosicionScroll = usePosicionScroll();
  return (
    <header 
    className={`sticky top-0 z-50 transition-shadow ${
        PosicionScroll > 0
          ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
          : "shadow-none"
      }`}
    >
     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <Link href = "/">
        <button className="ml-3 text-xl">EyeLeaf</button>
        </Link>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      </nav>
      <Link href = "/about">
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Log in
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      </Link>
    </div>
  </header>

  )
}

export default Header
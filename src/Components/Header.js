"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
     <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/imagenes/Lupa.png'
          alt='logo'
          width= "40"
          height= "18"
          className='object-contain'
        />
        <button className="ml-3 text-2xl">GlassCore</button>
      </Link>
      </div>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      </nav>
      <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-100">
      <Link href = "/pages/Login">
      <button className="inline-flex items-center bg-sky-800 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">Log in
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      </Link>
      </div>
    </nav>
  </header>

  )
}

export default Header
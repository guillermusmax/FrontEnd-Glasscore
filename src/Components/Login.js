"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Login = () => (
  <form className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 bg-sky-900 rounded-lg overflow-hidden sm:mr-16 mx-10 my-7 p-10 flex items-end justify-start relative">
        <Image title="back"
          width={2000}
          height={2000}
          src="/imagenes/GlassCore5.png"
          objectFit='cover'>
        </Image>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full] md: py-36 px-3 mx-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Log in</h2>
        <div className="relative mb-4">
          <label htmlFor="full-user" className="leading-7 text-sm text-gray-600">User</label>
          <input type="number" id="full-user" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>          
          </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
          <input type="password" id="password" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <Link href="/pages/Inicio">
          <button className="text-white bg-sky-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Log in</button>
        </Link>
        <Link href="/pages/forget">
          <button className="text-blue-500 inline-flex items-center">Forget Password?
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24"></svg>
          </button>
        </Link>
      </div>
    </div>
  </form>
)

export default Login
/* eslint-disable jsx-a11y/alt-text */
"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Login = () => (
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div class="lg:w-2/3 bg-sky-900 rounded-lg overflow-hidden sm:mr-16 mx-10 my-7 p-10 flex items-end justify-start relative">
        <Image title="back"
          width={2000}
          height={2000}
          src="/imagenes/GlassCore5.png"
          objectFit='cover'>
        </Image>
      </div>
      <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full] md: py-36 px-3 mx-10 md:mt-0">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Log in</h2>
        <div class="relative mb-4">
          <label for="full-user" class="leading-7 text-sm text-gray-600">User</label>
          <input type="number" id="full-user" user="full-user" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />          </div>
        <div class="relative mb-4">
          <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
          <input type="password" id="password" user="password" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <Link href="/Inicio">
          <button class="text-white bg-sky-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Log in</button>
        </Link>
        <Link href="/forget">
          <button class="text-blue-500 inline-flex items-center">Forget Password?
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"></svg>
          </button>
        </Link>
      </div>
    </div>
  </section>
  // <div class="container px-4 py-24 mx-auto flex flex-wrap items-center">
  //   <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
  //     <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
  //       <a class="absolute inset-0">
  //         <Image width="10000"
  //           height="10000"
  //           title="back"
  //           src="/imagenes/GlassCore1.png" objectFit='cover'>
  //         </Image>
  //       </a>
  //     </div>
  //   </div>
  //   <div class="item-cente lg:w-2/6 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-24 w-full mt-10 md:mt-20">
  //     <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Log in</h2>
  //     <div class="relative mb-4">
  //       <label for="full-user" class="leading-7 text-sm text-gray-600">User</label>
  //       <input type="number" id="full-user" user="full-user" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
  //     </div>
  //     <div class="relative mb-4">
  //       <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
  //       <input type="password" id="password" user="password" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
  //     </div>
  //     <Link href="/Inicio">
  //       <button class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Log in</button>
  //     </Link>
  //     <Link href="/forget">
  //       <button class="text-indigo-500 inline-flex items-center">Forget Password?
  //         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"></svg>
  //       </button>
  //     </Link>
  //   </div>
  // </div>
)

export default Login
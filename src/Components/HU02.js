/* eslint-disable jsx-a11y/alt-text */
"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HU02 = () => (
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div class="lg:w-2/3 bg-sky-900 rounded-lg overflow-hidden sm:mr-16 mx-10 my-7 p-10 flex items-end justify-start relative">n
        <Image title="back"
          width={2000}
          height={2000}
          src="/imagenes/GlassCore5.png"
          objectFit='cover'>
        </Image>
      </div>
      <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full] md: py-36 px-3 mx-10 md:mt-0">
      h2 style={{ fontSize: 'calc(36px + 2vmin)', letterSpacing: 'normal', width: '100%' }} <h2 class="text-customBlue text-lg font-inter font-black mb-5">Cambiar Contraseña</h2>
        <div class="relative mb-4">
          <label for="paswword" class="leading-7 text-sm text-customBlue">Contraseña nueva</label>
          <input type="password" id="password" user="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />          </div>
        <div class="relative mb-4">
          <label for="password" class="leading-7 text-sm text-customBlue">Confirmar contraseña</label>
          <input type="password" id="password" user="password" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <Link href="/Inicio">
          <button class="text-white bg-sky-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Confirmar</button>
        </Link>
      </div>
    </div>
  </section>
)

export default HU02
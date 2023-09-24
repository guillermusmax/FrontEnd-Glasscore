"use client"
import React from 'react'
import Link from 'next/link'
import Login from '@/Components/Login'
import Header from '@/Components/Header'

export default function Page(){
  return (
    <main>
      <Header/>
      <Login/>
    </main>
  )
}
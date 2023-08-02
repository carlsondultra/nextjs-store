"use client"
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='sticky top-0 p-6 bg-white border-b
    border-solid border-blue-900 shadow-md z-50 text-2xl sm:-3xl
    md:text-4xl sm:p-8 flex item-center justify-between'>
        <Link href={'/'}>
            <h1 className='uppercase cursor-pointer hover:scale-110'>My Store</h1>
        </Link>
        <i class="fa-solid cursor-pointer hover:text-slate-500 fa-cart-shopping"></i>
    </header>
  )
}

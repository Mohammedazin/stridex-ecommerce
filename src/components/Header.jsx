import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-gray-100 p-4 flex items-center justify-between">
      <Link to="/" className="font-bold text-xl">StrideX</Link>
      <nav>
        <Link to="/cart" className="mr-4">Cart</Link>
        <a href="mailto:stride@email.com">Contact</a>
      </nav>
    </header>
  )
}

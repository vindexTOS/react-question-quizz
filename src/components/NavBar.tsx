import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-center w-[100%] ">
      <Link className="text-[2rem] text-gray-700" to="/">
        Go To Main Page
      </Link>
    </nav>
  )
}

export default NavBar

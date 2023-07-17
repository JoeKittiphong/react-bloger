import React from 'react'
import { Link } from 'react-router-dom'
import "../src/style/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <Link className='logo' to={"/"}>
        logo
      </Link>
      <div className='link'>
        <Link to={"/"}>Home</Link>
        <Link to={"/addPost"}>Add Post</Link>
      </div>
    </div>
  )
}

export default Navbar
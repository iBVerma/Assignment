import React from 'react'
import "../style/Nav.css"
import art1 from "../assets/art1.jpg"
import art2 from "../assets/art2.jpg"
import art from "../assets/art.jpg"
function Nav() {
  return (
    <div className='Nav'>
        <h1>Task Manager</h1>
        <img src={art} className='art'/>
        <img src={art2} className='art'/>
        <img src={art1} className='art'/>
        <img src={art2} className='art'/>
        <img src={art1} className='art'/>
    </div>
  )
}

export default Nav

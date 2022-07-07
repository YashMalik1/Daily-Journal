import React from 'react'
import classes from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={classes.bar}>    
      <ul>
        <li><Link to='/'><p>Personal Diary</p></Link></li>
        <li><Link to='/'><p>Task Tracker</p></Link></li>
        <li><Link to='/about'><p>About</p></Link></li>
      </ul>
    </div>
  )
}

export default NavBar
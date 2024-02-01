import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import s from '../Ap.module.css'

const Navigation = () => {
  return (
    <nav className={s.navigation}>
     <img width={80} height={80} src='./img/noteanimation.gif' alt='1'/>
    <span className={s.text}> Computer Shop </span>
    <div >
        <span className={s.bitwin}>
        <NavLink className={s.text}  to="/">Products</NavLink>
        </span>
        <span>
        <NavLink className={s.text} to="/about">About us</NavLink>
        </span >
        </div>
    </nav>
  )
}
export default Navigation
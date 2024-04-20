import React from 'react'
import { Link } from 'react-router-dom'
import scan_icon from '../images/icons/scan_icon.svg'
import plant_garden from '../images/icons/plant_garden.png'
import './NavBar.module.css'
import PageCollection from '../pages/PageCollection'

const NavBar = () => {
  return (
    <div className='Nav'>
            <Link to="PagePhoto"><img src={scan_icon} alt="" /></Link>
           <Link to=""> <img src={plant_garden} alt="" /> </Link>
    </div>
  )
}

export default NavBar
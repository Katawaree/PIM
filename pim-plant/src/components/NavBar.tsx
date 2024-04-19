import React from 'react'
import scan_icon from '../images/icons/scan_icon.svg'
import plant_garden from '../images/icons/plant_garden.png'
import './NavBar.module.css'
import PageCollection from '../pages/PageCollection'

const NavBar = () => {
  return (
    <div className='Nav'>
        <div>
            <img src={scan_icon} alt="" />
        </div>
        <div>
            <a href=""><img src={plant_garden} alt="" /></a> 
        </div>
    </div>
  )
}

export default NavBar
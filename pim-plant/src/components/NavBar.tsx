  import React from 'react'
  import { Link } from 'react-router-dom'
  import scan_icon from '../images/icons/scan_icon.svg'
  import plant_garden from '../images/icons/plant_garden.png'
  import './NavBar.module.css'
  import PageCollection from '../pages/PageCollection'
  import pokedex from '../images/icons/pokedex.png'
  const NavBar = () => {
    return (
      <div className='Nav'>
        <Link to=""><img src={plant_garden} alt="" style={{ marginRight: '60px' }} /></Link>
        <Link to="PagePhoto"><img src={scan_icon} alt="" style={{ marginRight: '65px' }} /></Link>
        <Link to="PagesCollection"><img src={pokedex} alt="" style={{ marginRight: '-12px' }} /></Link>
      </div>
    )
  }
  
  export default NavBar
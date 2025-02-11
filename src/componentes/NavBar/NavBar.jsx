import "./NavBar-styles.css"
import logo from "/img/logo.png"
import React from 'react'
import { Outlet, Link } from "react-router-dom"
function NavBar() {
  return (
    <nav className="nav-bar">
      <div><img src={logo} alt="" className="logo"/></div>
      <ul className="items">
          <li><Link to='/'>INICIO</Link></li>
          <li><Link to='/etiquetas-personalizadas'>ETIQUETAS</Link></li>
          <li><Link to='/sellos'>SELLOS</Link></li>
          <li><Link to='/quienes-somos'>¿QUIENES SOMOS?</Link></li>
          <li><Link href="">DONDE COMPRAR</Link></li>
          <li><Link href="">COMENTARIO</Link></li>
          <li><Link to='/login'>LOG IN</Link></li>
      </ul>
      <Outlet/>
    </nav>
  )
}
export default NavBar;
import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo2.png'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {

  const [menu, setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)
  const menuRef = useRef()

  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }

  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt=''/>
        </div>
        <img  className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className='nav-menu'>
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none', color: '#131216'}} to='/'>Shop</Link>{menu=== "shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none', color: '#131216'}} to='/mens'>Mens</Link>{menu=== "mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none', color: '#131216'}} to='/womens'>Womens</Link>{menu=== "womens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none', color: '#131216'}} to='/kids'>Kids</Link>{menu=== "kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
          <Link style={{textDecoration: 'none', color: '#131216'}} to='/login'><button>Login</button></Link>
          <Link style={{textDecoration: 'none', color: '#131216'}} to='/cart'><IoCartOutline fontSize={"60px"} className='nav-login-cart-img'/></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
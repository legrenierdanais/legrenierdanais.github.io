import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Logo from '../../assets/logo.svg'
import { animateScroll as scroll } from 'react-scroll'
import {LogoImg, MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu} from './NavbarElements'
import {menus} from "./Data";

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
      if(window.scrollY >= 80) {
          setScrollNav(true)
      } else {
          setScrollNav(false)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', changeNav)
  })

  const scrollUp = () => {
      scroll.scrollToTop();
  }

  const navItems = menus.map((m) =>
      <NavItem>
        <NavLinks to={m.id} smooth={true} duration={500} spy={true} exact='true' offset={-80}>{m.label}</NavLinks>
      </NavItem>
  )
  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={scrollUp}><LogoImg src={Logo} alt='logo' />Le Grenier d'Anaïs</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    {navItems}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar
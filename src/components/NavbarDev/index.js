import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Logo from '../../assets/logo.svg'
import {animateScroll as scroll, Button} from 'react-scroll'
import {LogoImg, MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu} from './NavbarElements'
import {menus} from "./Data";
import {AppBar, Avatar, Box, Container, IconButton, Link, Menu, MenuItem, Toolbar, Tooltip, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const NavbarDev = ({toggle}) => {
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

    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    // const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    // const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        // setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        // setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        // setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        // setAnchorElUser(null);
    };

  return (
    <>
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*<Box>*/}
                        <Link component="img"
                              sx={{
                                  maxHeight: {xs: 50, sm: 60, md: 75}
                              }}
                              alt="Logo"
                              src={Logo}
                              onClick={scrollUp}
                              href="/"
                              underline="none"
                        />
                        <Typography sx={{
                            fontFamily: 'Licorice',
                            fontSize: '2.1rem'
                        }}>Le grenier d'Anaïs</Typography>
                    {/*</Box>*/}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        {/*<Menu*/}
                        {/*    id="menu-appbar"*/}
                        {/*    anchorEl={anchorElNav}*/}
                        {/*    anchorOrigin={{*/}
                        {/*        vertical: 'bottom',*/}
                        {/*        horizontal: 'left',*/}
                        {/*    }}*/}
                        {/*    keepMounted*/}
                        {/*    transformOrigin={{*/}
                        {/*        vertical: 'top',*/}
                        {/*        horizontal: 'left',*/}
                        {/*    }}*/}
                        {/*    open={Boolean(anchorElNav)}*/}
                        {/*    onClose={handleCloseNavMenu}*/}
                        {/*    sx={{*/}
                        {/*        display: { xs: 'block', md: 'none' },*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    {pages.map((page) => (*/}
                        {/*        <MenuItem key={page} onClick={handleCloseNavMenu}>*/}
                        {/*            <Typography textAlign="center">{page}</Typography>*/}
                        {/*        </MenuItem>*/}
                        {/*    ))}*/}
                        {/*</Menu>*/}
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Typography>{page}</Typography>
                            // <Button
                            //     key={page}
                            //     // onClick={handleCloseNavMenu}
                            //     sx={{ my: 2, color: 'white', display: 'block' }}
                            // >
                            //     {page}
                            // </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        {/*<Menu*/}
                        {/*    sx={{ mt: '45px' }}*/}
                        {/*    id="menu-appbar"*/}
                        {/*    anchorEl={anchorElUser}*/}
                        {/*    anchorOrigin={{*/}
                        {/*        vertical: 'top',*/}
                        {/*        horizontal: 'right',*/}
                        {/*    }}*/}
                        {/*    keepMounted*/}
                        {/*    transformOrigin={{*/}
                        {/*        vertical: 'top',*/}
                        {/*        horizontal: 'right',*/}
                        {/*    }}*/}
                        {/*    open={Boolean(anchorElUser)}*/}
                        {/*    onClose={handleCloseUserMenu}*/}
                        {/*>*/}
                        {/*    {settings.map((setting) => (*/}
                        {/*        <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
                        {/*            <Typography textAlign="center">{setting}</Typography>*/}
                        {/*        </MenuItem>*/}
                        {/*    ))}*/}
                        {/*</Menu>*/}
                    </Box>
                </Toolbar>
            </Container>
            {/*<Toolbar>*/}
            {/*    <Box display="flex" flexDirection="row">*/}
            {/*        <Link component="img"*/}
            {/*              sx={{*/}
            {/*                  maxHeight: {xs: 50, sm: 60, md: 75}*/}
            {/*              }}*/}
            {/*              alt="Logo"*/}
            {/*              src={Logo}*/}
            {/*              onClick={scrollUp}*/}
            {/*              href="/"*/}
            {/*              underline="none"*/}
            {/*        />*/}
            {/*        <Typography>Le grenier d'Anaïs</Typography>*/}
            {/*    </Box>*/}
            {/*</Toolbar>*/}

        </AppBar>
        {/*<Nav scrollNav={scrollNav}>*/}
        {/*    <NavbarContainer>*/}
        {/*        <NavLogo to='/' onClick={scrollUp}><LogoImg src={Logo} alt='logo' />Le Grenier d'Anaïs</NavLogo>*/}
        {/*        <MobileIcon onClick={toggle}>*/}
        {/*            <FaBars />*/}
        {/*        </MobileIcon>*/}
        {/*        <NavMenu>*/}
        {/*            {navItems}*/}
        {/*        </NavMenu>*/}
        {/*        <NavBtn>*/}
        {/*            <NavBtnLink to='/signin'>Sign In</NavBtnLink>*/}
        {/*        </NavBtn>*/}
        {/*    </NavbarContainer>*/}
        {/*</Nav>*/}
    </>
  )
}

export default NavbarDev
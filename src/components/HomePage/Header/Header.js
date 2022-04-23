import React, { useEffect, useState } from 'react'
import './Header.css'
import '../../../App.css'
import Logo from '../../Logo/Logo'
import HamburgerMenu from '../../Logo/HamburgerMenu'
import DesktopMenu from './DesktopMenu'
import Cart from '../../Logo/Cart'
import Line from '../../Line/Line'

const Header = ({relativeMenu}) => {
  const [relative, setRelative] = useState(relativeMenu)
  const [menu, setMenu] = useState('menu')
  useEffect(() => {
    setMenu(relative ? 'menu__relative' : 'menu')
  },[])

  return (
      <div className={menu}>            
        <div className='menu__svg flex__center'>          
          <HamburgerMenu />
          <Logo id='alignLeft'/>
          <DesktopMenu />
          <Cart />
        </div>        
      {!relative &&      
        <Line />         
      }
      </div>
  )
}

export default Header
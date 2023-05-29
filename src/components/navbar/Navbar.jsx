import styles from './index.module.scss'
import HamburgerMenu from '../hamburgerMenu'
import { useState, useRef, useEffect } from 'react'

const Navbar = ({ setReservation }) => {
  const onHandleClick = () => setReservation(true)

  const [showMenu, setShowMenu] = useState(false)

  const hamburgerTrigger = () => {
    setShowMenu(!showMenu) /* funziona come un toggle */
  }

  return (
    <div className={styles.Navbar}>
      <HamburgerMenu showMenu={showMenu} hamburgerTrigger={hamburgerTrigger} setReservation={setReservation}/>
      <img
        src='https://img.icons8.com/external-tal-revivo-filled-tal-revivo/256/external-mobile-application-hamburger-menu-setting-interface-basic-filled-tal-revivo.png'
        alt='hamburger'
        className={styles.Hamburger}
        onClick={hamburgerTrigger}
      />
      <ul className={styles.menu}>
        <li>Home</li>
        <li>About</li>
        <li onClick={onHandleClick}>Booking</li>
        <li><img
        src='../../../public/1.png'
        alt='logo'
      /></li>
      </ul>
      
      
    </div>
  )
}

export default Navbar

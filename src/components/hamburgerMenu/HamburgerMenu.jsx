import styles from './index.module.scss'
import MenuContent from '../menuContent'

const HamburgerMenu = ({ showMenu, hamburgerTrigger, handleBookingClick }) => {
  return (
    <div className={`${styles.HamburgerMenu} ${showMenu ? styles.show : ''}`}>
      <button onClick={hamburgerTrigger}>X</button>
      <MenuContent handleBookingClick={handleBookingClick} />
    </div>
  )
}

export default HamburgerMenu


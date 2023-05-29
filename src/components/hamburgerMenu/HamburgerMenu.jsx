import styles from './index.module.scss'
import MenuContent from '../menuContent'

const HamburgerMenu = ({ showMenu, hamburgerTrigger, setReservation }) => {
  return (
    <div className={`${styles.HamburgerMenu} ${showMenu ? styles.show : ''}`}>
      <button onClick={() => hamburgerTrigger()}>X</button>
      <MenuContent setReservation={setReservation}/>
    </div>
  )
}

export default HamburgerMenu

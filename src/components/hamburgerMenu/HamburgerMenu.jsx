import styles from './index.module.scss'
import MenuContent from '../menuContent'

const HamburgerMenu = ({ showMenu, hamburgerTrigger }) => {
  return (
    <div className={`${styles.HamburgerMenu} ${showMenu ? styles.show : ''}`}>
      <button onClick={() => hamburgerTrigger()}>X</button>
      <MenuContent />
    </div>
  )
}

export default HamburgerMenu

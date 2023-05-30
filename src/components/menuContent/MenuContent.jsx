import styles from './index.module.scss'

const MenuContent = ({ handleBookingClick }) => {
  return (
    <div className={styles.MenuContent}>
      <ul className={styles.hamburgerUl}>
        <li>
          <p>Home</p>
        </li>
        <li>
          <p>About</p>
        </li>
        <li>
          <p onClick={handleBookingClick}>Booking</p>
        </li>
      </ul>
    </div>
  )
}

export default MenuContent


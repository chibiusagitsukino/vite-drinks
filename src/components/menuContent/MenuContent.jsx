import styles from './index.module.scss'

const MenuContent = ({setReservation }) => {
  const onHandleClick = () => setReservation(true)
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
          <p onClick={onHandleClick}>Booking</p>
        </li>
      </ul>
    </div>
  )
}

export default MenuContent

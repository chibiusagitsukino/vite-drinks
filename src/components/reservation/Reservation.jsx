import styles from './index.module.scss'
import { useState } from 'react'

const Reservation = ({ setReservation, setTimeReservation, setViewPopup }) => {
  const [surname, setSurname] = useState('')
  const [hour, setHour] = useState('')
  const [date, setDate] = useState('')
  const [closeComponent, setCloseComponent] = useState(false)
  const onHandleTextInput = (e) => setSurname(e.target.value)
  const onHandleDateInput = (e) => setDate(e.target.value)
  const onHandleTimeInput = (e) => setHour(e.target.value)

  const onHandleCloseModal = () => {
    setCloseComponent(true)

    setTimeout(() => {
      setReservation(false)
    }, 1350)
  }

  const onHandleSubmit = (e) => {
    e.preventDefault()
    setTimeReservation({
      date: date,
      hour: hour,
    })
    setViewPopup(true)
    setReservation(false)
    setTimeout(() => {
      setViewPopup(false)
    }, 5000)
  }

  return (
    <div className={styles.Reservation}>
      <div className={styles.overlay} onClick={onHandleCloseModal}></div>
      <div
        className={`${styles.content} ${
          closeComponent && styles.contentFadeOut
        }`}
      >
        <h1>Book your drink</h1>
        <form className={styles.form} onSubmit={onHandleSubmit}>
          <label htmlFor='text'>Insert</label>
          <input
            id='text'
            type='text'
            name='text'
            value={surname}
            onChange={onHandleTextInput}
            placeholder='surname'
            required
          />
          <label htmlFor='date'>Insert</label>
          <input
            type='date'
            name='date'
            id='date'
            value={date}
            onChange={onHandleDateInput}
            required
          />
          <label htmlFor='time'>Time</label>
          <input
            type='time'
            id='time'
            name='time'
            value={hour}
            onChange={onHandleTimeInput}
            required
          />

          <input type='submit' value='Book a drink' />
        </form>
      </div>
    </div>
  )
}

export default Reservation

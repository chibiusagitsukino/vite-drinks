import { useState, useEffect } from 'react'
import { GET } from './utils/http'
import { filteredList } from './utils/funcs'

import Navbar from './components/navbar'
import Hero from './components/hero'
import Content from './components/content'
import Item from './components/item'
import Popup from './components/popup/Popup'
import styles from './App.module.scss'
import Reservation from './components/reservation'

function App() {
  const [drinkList, setDrinkList] = useState([])

  const [category, setCategory] = useState('Drink')

  const [reservation, setReservation] = useState(false)

  const [drinkClick, setDrinkClick] = useState({
    isVisible: false,
    payload: {},
    positionList: null,
  })

  const [viewPopup, setViewPopup] = useState(false)

  const [timeReservation, setTimeReservation] = useState({
    hour: '',
    date: '',
  })

  useEffect(() => {
    GET('/search.php?f=c').then(({ drinks }) => {
      setDrinkList(() => drinks)
    })
  }, [])

  return (
    <div className={styles.App}>
      <Navbar setReservation={setReservation} />
      {drinkClick.isVisible ? (
        <Item
          setDrinkClick={setDrinkClick}
          data={drinkClick}
          filteredList={filteredList(drinkList, 'strCategory', category)}
        />
      ) : (
        <>
          {' '}
          {reservation && (
            <Reservation
              reservation={reservation}
              setReservation={setReservation}
              setTimeReservation={setTimeReservation}
              setViewPopup={setViewPopup}
            />
          )}
          <Hero setCategory={setCategory} />
          <Content
            data={filteredList(drinkList, 'strCategory', category)}
            setDrinkClick={setDrinkClick} 
          />{' '}
        </>
      )}
      {viewPopup && (
        <Popup>
          <h3>Success!</h3>
          <p>
            Have your drink on{' '}
            <strong>
              {' '}
              {timeReservation.date.split('-').reverse().join('-')}
            </strong>{' '}
            at <strong> {timeReservation.hour}</strong>
          </p>
        </Popup>
      )}
    </div>
  )
}

export default App

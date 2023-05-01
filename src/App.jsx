import { useState, useEffect } from 'react'
import { GET } from './utils/http'
import { filteredList } from './utils/funcs'
import Alphabet from './components/alphabet'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Content from './components/content'
import Item from './components/item'
import Popup from './components/popup/Popup'
import styles from './App.module.scss'
import Reservation from './components/reservation'

function App() {

  const [selectedLetter, setSelectedLetter] = useState('a')

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
    GET('/search.php?f=' + selectedLetter).then(({ drinks }) => {
      setDrinkList(() => drinks)
    })
  }, [selectedLetter])


  /*

   useEffect(() => {
    if (selectLetterValue !== "") {
      setLoader(true);
      GET("/search.php?f=" + selectLetterValue).then((data) => {
        setLoader(false);
        if (data.error) {
          setError(data.error);
        } else {
          setError(null);
          setCocktailList(() => (data.drinks ? data.drinks : []));
        }
      });
    }
  }, [selectLetterValue]);
  
  */

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
          <Alphabet selectedLetter={selectedLetter} setSelectedLetter={setSelectedLetter}/>
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

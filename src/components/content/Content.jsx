import Card from '../card'
import styles from './index.module.scss'

const Content = ({ data, setDrinkClick }) => {
  return (
    <div className={`${styles.Content} ${styles.contentContainer}`} >
      {data.map((drink, index) => (
        <Card
        data={{ ...drink, positionList: index }}
        setDrinkClick={setDrinkClick}
        key={drink.idDrink}
        />
        ))}
        </div>
  )
}

export default Content

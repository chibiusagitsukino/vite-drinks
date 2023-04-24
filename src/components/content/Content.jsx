import Card from '../card'
import styles from './index.module.scss'

const Content = ({ data, setDrinkClick }) => {
  return (
    <div className={styles.Content}>
      <div className={styles.wrapper}>
      {data.map((drink, index) => (
        <Card
        data={{ ...drink, positionList: index }}
        setDrinkClick={setDrinkClick}
        key={drink.idDrink}
        />
        ))}
        </div>
    </div>
  )
}

export default Content

import styles from './index.module.scss'
import { valuesExtractor } from '../../utils/funcs'

const Card = ({ data, setDrinkClick }) => {
  const onHandleClick = () =>
    setDrinkClick((prev) => ({
      ...prev,
      payload: data,
      isVisible: true,
      positionList: data.positionList,
    }))

  const ingredientsData = () => {
    return valuesExtractor(data, 'strIngredient')
  }

  return (
    <div className={styles.Card} onClick={onHandleClick}>
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <div className={styles.text}>
        <h2>{data.strDrink}</h2>
        <ul>
          {ingredientsData().map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Card

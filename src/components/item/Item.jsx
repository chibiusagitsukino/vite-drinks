import styles from './index.module.scss'
import { valuesExtractor } from '../../utils/funcs'
import {BsCaretRightFill, BsCaretLeftFill} from 'react-icons/bs'

const Item = ({ data, setDrinkClick,  filteredList }) => {
  const onHandleClick = () =>
    setDrinkClick((prev) => ({
      ...prev,
      isVisible: false,
    }))

  const ingredientsData = () => {
    return valuesExtractor(data.payload, 'strIngredient')
  }

  const onHandleRightButtonClick = () =>
    setDrinkClick((prev) => ({
      ...prev,
      payload: filteredList[prev.positionList + 1],
      positionList: prev.positionList + 1,
    }))

  const onHandleLeftButtonClick = () =>
    setDrinkClick((prev) => ({
      ...prev,
      payload: filteredList[prev.positionList - 1],
      positionList: prev.positionList - 1,
    }))

  return (
    <div className={styles.heroItem}>
      <h1 className={styles.heroTitle}>Mojito's Revival</h1>
    <div className={styles.Item}> 
      <div className={styles.leftButton}>
        <BsCaretLeftFill className={styles.prev} onClick={onHandleLeftButtonClick} style={{ display: data.positionList === 0 ? "none" : "inline-block" }} />
        {/* <button className={styles.prev} onClick={onHandleLeftButtonClick} disabled={data.positionList === 0}>
        &lt;
        </button> */}
      </div>
      <div className={styles.text}> 
        <div className={styles.carousel}></div>
        <h1>{data.payload.strDrink}</h1>
        {/* <p>{data.payload.strCategory}</p>
        <p>{data.payload.strGlass}</p> */}
        <div className={styles.textList}>
          <ul>
            <h3>Ingredients:</h3>

            {ingredientsData().map((ingredient) => (
              <li key={ingredient}><p>{ingredient}</p></li>
            ))}
          </ul>
          <ul>
            <h3>Recipe:</h3>
            <li><p className={styles.recipeText}>{data.payload.strInstructions}</p></li>
          </ul>
        </div>
      </div>
      <div className={styles.image}> 
        <button onClick={onHandleClick} className={styles.close}>
          x
        </button>
        <img src={data.payload.strDrinkThumb} alt={data.payload.idDrink} />
      </div>
      <div className={styles.rightButton}>
        <BsCaretRightFill className={styles.next} onClick={onHandleRightButtonClick} style={{
    display:
      data.positionList === filteredList.length - 1 ? "none" : "inline-block",
  }} />
        {/* <button className={styles.next} onClick={onHandleRightButtonClick} disabled={data.positionList === filteredList.length - 1}>
        &gt;
        </button> */}
      </div>
    </div>
    </div>
  )
}

export default Item

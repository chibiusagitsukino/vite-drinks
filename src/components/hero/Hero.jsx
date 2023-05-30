import styled from 'styled-components'
import Alphabet from '../alphabet'


const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c4d0ba;
  // height: 350px;
  border-radius: 15px;
  padding: 20px;
  margin: 20px;
  min-height: calc(80vh - 75px);
`



const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 3rem;
  color: #cb8a64;
  text-shadow: rgb(255 255 255 / 50%) 0px 0px 4px;
`

const ListWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  gap: 10px;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  font-size: 1.2rem;
  font-weight: bold;
  color: #3a3a3a;
`

const Separator = styled.hr`
  border: 0;
  width: 80%;
  border-bottom: 1px dashed #c4d0ba;
  border-width: 4px;
`

const CategoryWrapper = styled(ListWrapper)`
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 5px; 
`

const CategoryItem = styled(ListItem)`
  padding: 4px 8px;
  cursor: pointer;
  background-color: #cc5a24;
  border-radius: 15px;
  width: 90px;
    text-align: center;

  &:hover {
    background-color: #555;
    color: #fff;
    transform: scale(1.1,1.1)
  }

  /* alternanza di colore */
  &:nth-child(3n-2) {
    background-color: #cb8a64;
  }
  &:nth-child(3n-1) {
    background-color: #d0b520;
  }
  &:nth-child(3n) {
    background-color: #7e9c66;
  }
`
const Image = styled.img `

  height: 500px;
  margin-right: 1200px;
  margin-top: -360px;

  @media only screen and (max-width: 767px) {
    display: none;
  }

`

;


const Hero = ({ setCategory, selectedLetter, setSelectedLetter, children }) => {

  

  const onHandleClick = (value) => {
    setCategory(value)
  }

  return (
    <HeroWrapper >
      <Title>Mojito's Revival</Title>
      {/* <ListWrapper className='firstList'>
        <ListItem>Martinis</ListItem>
        <ListItem>Classics</ListItem>
        <ListItem>Signatures</ListItem>
        <ListItem>V & T</ListItem>
      </ListWrapper> */}
      {/* <Separator /> */}
      <CategoryWrapper className='secondList'>
        <CategoryItem onClick={() => onHandleClick('Ordinary Drink')}>
          Ordinary
        </CategoryItem>
        <CategoryItem onClick={() => onHandleClick('Cocktail')}>
          Cocktail
        </CategoryItem>
        <CategoryItem onClick={() => onHandleClick('Shot')}>Shot</CategoryItem>
        <CategoryItem onClick={() => onHandleClick('Punch / Party Drink')}>
          Party
        </CategoryItem>
        <CategoryItem onClick={() => onHandleClick('Coffee / Tea')}>
          Coffee
        </CategoryItem>
        <CategoryItem onClick={() => onHandleClick('Other / Unknown')}>
          Other
        </CategoryItem>
      </CategoryWrapper>
      <Alphabet selectedLetter={selectedLetter} setSelectedLetter={setSelectedLetter}/>
      
      <Image className='mojito' src="../../../public/2.png" alt="mojito" />
      {children}
    </HeroWrapper>

  )
}

export default Hero
